const express = require('express');
const mongoose = require('mongoose');
const fs = require("fs");
const cors = require('cors');
const axios = require('axios');
const http = require('http');
const { Server } = require('socket.io');

const users = require('./app/models/users');
const offers = require('./app/models/offers');
const room = require('./app/models/room');
const message = require('./app/models/messages');
// 
const db = require("./app/models");
const EmailSender = require("./app/helpers/emailVerification");
const crypto = require("crypto")
// 
const app = express();
app.use(cors());
app.use(express.json());

const CHAPA_AUTH_KEY = 'CHASECK_TEST-AluGHWd8Xjp9Ya6voAW7CERLkf6JXjEK';

// 
const multer = require('multer');
const path = require('path');
const Doc = require('./app/models/DocModel');
const { fileURLToPath, pathToFileURL } = require('url');

const Token = db.tokens;
var jwt = require("jsonwebtoken");
const { isAsyncFunction } = require('util/types');

const importMetaUrl = pathToFileURL(__filename).href;
const fileURLToPathNew = (url) => {
  if (typeof url !== 'string' || !url.startsWith('file:')) {
    throw new TypeError('The URL must be of scheme file');
  }
  return fileURLToPath(url);
};

const __filenameFromMetaUrl = fileURLToPathNew(importMetaUrl);
const _dirname = path.dirname(__filenameFromMetaUrl);

app.use("/uploads", express.static(path.join(_dirname, "uploads")));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Routes for Documents
app.post("/Docs", upload.single("pdf"), async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const { path } = req.file;

    // Create a new document instance with the file path
    const doc = new Doc({
      title,
      description,
      path,
      category,
    });

    await doc.save();

    res.json({ message: "Document uploaded successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//----------------------------------------------------------------
app.get("/Docs", async (request, response) => {
  try {
    const docs = await Doc.find({});

    return response.status(200).json({
      count: docs.length,
      data: docs,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//----------------------------------------------------------------
app.get("/Docs/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const doc = await Doc.findById(id);

    return response.status(200).json(doc);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//----------------------------------------------------------------
app.put("/Docs/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.description ||
      !request.body.category
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, description, category",
      });
    }

    const { id } = request.params;

    const result = await Doc.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Document not found" });
    }

    return response
      .status(200)
      .send({ message: "Document updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//----------------------------------------------------------------
app.delete("/Docs/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Doc.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Document not found" });
    }

    const filePath = path.join(__dirname, result.path);
    if (!filePath) {
      return response.status(404).json({ message: "Document path not found" });
    }
    fs.unlink(filePath, (error) => {
      if (error) {
        console.error("Error deleting file:", error);
        return response.status(500).json({ message: "Error deleting file" });
      }
      console.log("File deleted successfully");
    });

    return response
      .status(200)
      .json({ message: "Document deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//----------------------------------------------------------------
app.get("/get-files", async (req, res) => {
  try {
    Doc.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) { }
});

app.get("/verify/:id/:token", async (req, res) => {
  // res.send('here I am')
  console.log("req.params", req.params)
  console.log("req.params", { _id: req.params.id })
  const user = await users.findById({ _id: req.params.id });
  console.log(user)
  if (!user) {
    return res.status(200).send({
      success: false,
      message: "Invalid link"
    });
  }

  const token = await Token.findOne({
    userId: user._id,
    token: req.params.token,
  });
  console.log("token", token)
  if (!token) return res.status(200).send({
    success: false,
    message: "Invalid link"
  });

  await users.updateOne({ _id: user._id }, { verified: true });
  await Token.findByIdAndDelete(token._id);

  res.status(200).send({
    success: true,
    message: "email verified sucessfully"
  });
  return;

});

app.get('/checkEmail/:email', (req, res) => {
  console.log(req.params)
  const email = req.params.email;
  users.find({ email: email })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});


// 
app.post("/accept-payment", async (req, res) => {
  const {
    amount,
    currency,
    email,
    first_name,
    last_name,
    phone_number,
    tx_ref,
  } = req.body;

  try {
    const header = {
      headers: {
        Authorization: `Bearer ${CHAPA_AUTH_KEY}`,
        "Content-Type": "application/json",
      },
    };
    const body = {
      amount: amount,
      currency: currency,
      email: email,
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      tx_ref: tx_ref,
      return_url: "http://localhost:5173/chat/6605179e271406574eb44e91",
    }
    let resp = "";
    await axios
      .post("https://api.chapa.co/v1/transaction/initialize", body, header)
      .then((response) => {
        resp = response;
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        res.status(400).json({
          message: error,
        });
      });
    res.status(200).json(resp.data);
  } catch (e) {
    res.status(400).json({
      error_code: e.code,
      message: e.message,
    });
  }
});

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("LAH");
});

app.get('/getFreelancers', (req, res) => {
  users.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.get('/getFreelancer/:id', (req, res) => {
  const id = req.params.id;
  users.findById({ _id: id })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});
app.get('/getUser/:username', (req, res) => {
  const username = req.params.username;
  users.find({ username: username })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.post('/clientlogin', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await users.findOne({ username, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post("/createUser", async (req, res) => {
  try {
    const { name, catagory, email } = req.body;
    console.log(req.body);
    const user = new users({
      name,
      catagory,
      email
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create user" });
  }
});

app.post("/updateUser/:id", async (req, res) => {
  const id = req.params.id
  console.log("this is the id", id)
  users.findByIdAndUpdate(id, req.body, {
    new: true,
  })
    .then(users => res.json(users))
    .catch(err => res.json(err))
});



app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  users.findByIdAndDelete({ _id: id })
    .then(result => {
      if (result) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch(error => {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.post("/createOffer", async (req, res) => {
  try {
    const { title, userid, description, price } = req.body;
    console.log(req.body);

    const offer = new offers({
      title,
      userid,
      description,
      price,
    });
    await offer.save();
    res.status(201).json({ message: "offer created successfully", offer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create offer" });
  }
});

app.get('/getOffers/:id', (req, res) => {
  const id = req.params.id;
  offers.find({ userid: id })
    .then(offers => res.json(offers))
    .catch(err => res.json(err));
});
app.get('/getRoom/:id', (req, res) => {
  const id = req.params.id;
  room.find({ userId: id })
    .then(rooms => res.json(rooms))
    .catch(err => res.json(err));
});



app.get('/client/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const conversation = await room.findOne({ userId });
    console.log(conversation)

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }
    const user = await users.findById(conversation.clientId);
    console.log(user)
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});












app.post('/createRoom', async (req, res) => {
  try {
    const { participants, roomId, userId, clientId } = req.body;

    const newRoom = new room({
      participants,
      roomId,
      userId,
      clientId
    });
    await newRoom.save();

    res.status(201).send("Room created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating room");
  }
});

app.post('/getRoomId', async (req, res) => {
  const { clientId, userId } = req.body;
  try {
    const roomId = await room.findOne({ clientId, userId });
    if (roomId) {
      res.status(200).json({ roomId: roomId.roomId });
    } else {
      res.status(404).json({ message: 'No room found for the provided client and user IDs' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




app.post('/createMessage', async (req, res) => {
  try {
    const { text, roomId, author } = req.body;

    const newMessage = new message({
      text,
      roomId,
      author
    });

    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Error creating message' });
  }
});

app.get('/getMessage/:id', (req, res) => {
  const id = req.params.id;
  message.find({ roomId: id })
    .then(messages => res.json(messages))
    .catch(err => res.json(err));
});




// 
app.use(express.urlencoded({ extended: true }));
require("./app/routes/form.routes")(app)
// 

const server = require('http').createServer(app);

server.listen(3000, () => {
  console.log("Server running on port 3000");

  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });
  const userQueue = [];
  const fullRooms = new Set();

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
      const index = userQueue.indexOf(socket.id);
      if (index !== -1) {
        userQueue.splice(index, 1);
      }
    });

    socket.on("join_room", (data) => {
      const roomId = data;
      const userId = socket.id;
      if (fullRooms.has(roomId)) {
        userQueue.push({ userId, roomId });
        console.log(`User ${userId} added to queue for room ${roomId}`);
      } else {
        fullRooms.add(roomId);
        socket.join(roomId);
        console.log(`User ${userId} joined room ${roomId}`);
      }
      while (userQueue.length > 0 && !fullRooms.has(userQueue[0].roomId)) {
        const { userId, roomId } = userQueue.shift();
        socket.to(roomId).emit("ready_to_join", userId);
        socket.join(roomId);
        console.log(`User ${userId} joined room ${roomId}`);
        fullRooms.add(roomId);
      }
    });

    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  });

  io.on("error", (error) => {
    console.error("Socket.IO error:", error);
  });
});

mongoose.connect('mongodb+srv://alazargetachew70:Qwertyuiop123@legaladvisoryhub.wrei7eq.mongodb.net/?retryWrites=true&w=majority&appName=LegalAdvisoryHub')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });