const express = require('express');
const mongoose = require('mongoose');
const { Types } = mongoose;
const fs = require("fs");
const cors = require('cors');
const axios = require('axios');
const http = require('http');
const { Server } = require('socket.io');

const users = require('./app/models/users');
const offers = require('./app/models/offers');
const completedOffers = require('./app/models/completedOffers');
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

// env
require("dotenv").config();
const CHAPA_AUTH_KEY = 'CHASECK_TEST-AluGHWd8Xjp9Ya6voAW7CERLkf6JXjEK';

// 
const multer = require('multer');
const path = require('path');
const Doc = require('./app/models/DocModel');
const { fileURLToPath, pathToFileURL } = require('url');

const Token = db.tokens;
var jwt = require("jsonwebtoken");
const { isAsyncFunction } = require('util/types');
const FreelancerProfile = require('./app/models/freelancerprofile');

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

const profileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/profile");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadProfile = multer({ storage: profileStorage });
const adminprofileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/profile");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const adminuploadProfile = multer({ storage: adminprofileStorage });

// create admin profile
app.post("/createAdminProfile", adminuploadProfile.fields([{ name: 'profilePicture' }]), async (req, res) => {

  try {
    console.log(req.body)

    const profilePicture = req.files['profilePicture'][0].filename;
    console.log(profilePicture)
    const { password, firstname, lastname, usertype, username, email } = req.body;

    const user = new users({
      profilePicture,
      password,
      firstName: firstname,
      lastName: lastname,
      userType: usertype,
      username,
      email,
      verified: false,
      disabled: false
    });
    try {
      const createduser = await user.save();
      console.log(createduser, "createduser");
      try {
        let token = await new Token({
          userId: createduser._id,
          token: crypto.randomBytes(32).toString("hex"),
        })
        const createdtoken = await token.save()
        console.log(createdtoken, "createdtoken");
        const message = `http://localhost:5173/emailverified/${createduser.id}/${token.token}`;

        EmailSender("Legal Advisory Hub", email, "Verify Email", message);
      } catch (err) {
        console.log(err, "first error for token")
        res.status(500).send({ message: err });
        return;
      }

    } catch (err) {
      console.log(err, "first error for token")
      res.status(500).send({ message: err });
      return;
    }
    res.status(201).json({ message: "Admin created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create user" });
  }
});
// create freelancer profile
app.post("/createFreelancerProfile", uploadProfile.fields([{ name: 'profilePicture' }]), async (req, res) => {
  try {
    // console.log(req.body)

    const {
      userid,
      category,
      firm,
      contact,
      city,
      language,
      bio,
    } = req.body;
    const profilePicture = req.files['profilePicture'][0].filename;

    await users.findByIdAndUpdate(userid, { profilePicture: profilePicture });
    const freelancerprofile = new FreelancerProfile({
      userid,
      category,
      firm,
      contact,
      city,
      language,
      bio
    });

    await freelancerprofile.save();
    res.status(201).json({ message: "Freelancer Profile Created Successfully" });
  } catch (error) {
    console.log("error")
    console.error(error);
    res.status(500).json({ message: "Failed to create freelancer" });
  }
});
// create user profile
app.post("/createUserProfile", uploadProfile.fields([{ name: 'profilePicture' }]), async (req, res) => {
  const {
    userid
  } = req.body;
  try {
    // console.log(req.body)
    const profilePicture = req.files['profilePicture'][0].filename;

    await users.findByIdAndUpdate(userid, { profilePicture: profilePicture });
    res.status(201).json({ message: "User Profile Created Successfully" });
  } catch (error) {
    console.log("error")
    console.error(error);
    res.status(500).json({ message: "Failed to create freelancer" });
  }
});

// 

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
app.get('/checkusername/:username', (req, res) => {
  console.log(req.params)
  const username = req.params.username;
  users.find({ username: username })
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
      return_url: "",
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
  // users.find({})
  //   .then(user => res.json(user))
  //   .catch(user => res.json(user));
  // FreelancerProfile.find({})
  //   .then(user => { console.log("freelancer", user) })
  //   .catch(err => { console.log("err", err) });
  users.aggregate([
    {
      $lookup: {
        from: "freelancerprofiles",
        localField: "_id",
        foreignField: "userid",
        as: "Details"
      }
    }
  ]).then(user => res.json(user))
    .catch(user => res.json(user));
});

app.get('/getFreelancer/:id', (req, res) => {
  const id = req.params.id;
  users.aggregate([
    {
      $lookup: {
        from: "freelancerprofiles",
        localField: "_id",
        foreignField: "userid",
        as: "Details"
      }
    },
    { $match: { _id: new Types.ObjectId(id) } }
  ])
    .then(user => res.json(user))
    .catch(err => res.json(err));
});
// this route has been added by alazar for admin purposes
app.get('/getUser', (req, res) => {
  users.find({})
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
    console.log(req.body)
    const { password, firstName, lastName, userType, username, email } = req.body;

    const user = new users({
      password,
      firstName,
      lastName,
      userType,
      username,
      email,
      verified: false,
      disabled: false
    });
    try {
      const createduser = await user.save();
      console.log(createduser, "createduser");
      try {
        let token = await new Token({
          userId: createduser._id,
          token: crypto.randomBytes(32).toString("hex"),
        })
        const createdtoken = await token.save()
        console.log(createdtoken, "createdtoken");
        const message = `http://localhost:5173/emailverified/${createduser.id}/${token.token}`;

        EmailSender("Legal Advisory Hub", email, "Verify Email", message);
      } catch (err) {
        console.log(err, "first error for token")
        res.status(500).send({ message: err });
        return;
      }

    } catch (err) {
      console.log(err, "first error for token")
      res.status(500).send({ message: err });
      return;
    }
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create user" });
  }
});
const updateprofileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/profile");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const updateuploadProfile = multer({ storage: updateprofileStorage });
app.post("/updateProfile", updateuploadProfile.fields([{ name: 'profilePicture' }]), async (req, res) => {
  console.log(req.body)
  try {
    const profilePicture = req.files['profilePicture'][0].filename;
    console.log("profilePicture", profilePicture)
    await users.findByIdAndUpdate(req.body.userid, { profilePicture: profilePicture });

  } catch (error) {

  }

  if (req.body.usertype == "freelancer") {
    if (req.body.newpassword == "") {

      try {
        await FreelancerProfile.findOneAndUpdate({ userid: req.body.userid },
          {
            category: req.body.catagory,
            firm: req.body.firm,
            contact: req.body.contact,
            city: req.body.city,
            language: req.body.language,
            bio: req.body.bio,
          })
        users.findByIdAndUpdate(req.body.userid,
          {
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            username: req.body.username,
          }).then(users => res.json({ success: true, users: users }))
          .catch(err => res.json({ success: false }));
      } catch (error) {
        res.json({ success: false, reason: error })
      }


    } else {
      try {
        await FreelancerProfile.findOneAndUpdate({ userid: req.body.userid },
          {
            category: req.body.catagory,
            firm: req.body.firm,
            contact: req.body.contact,
            city: req.body.city,
            language: req.body.language,
            bio: req.body.bio,
          })
        users.findByIdAndUpdate(req.body.userid,
          {
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            username: req.body.username,
            password: req.body.newpassword
          }).then(users => res.json({ success: true, users: users }))
          .catch(err => res.json({ success: false }));
      } catch (error) {
        res.json({ success: false, reason: error })
      }

    }

  } else {
    if (req.body.newpassword == "") {

      users.findByIdAndUpdate(req.body.userid,
        {
          firstName: req.body.firstname,
          lastName: req.body.lastname,
          username: req.body.username,
        })
        .then(users => res.json({ success: true, users: users }))
        .catch(err => res.json({ success: false }));
    } else {

      users.findByIdAndUpdate(req.body.userid,
        {
          firstName: req.body.firstname,
          lastName: req.body.lastname,
          username: req.body.username,
          password: req.body.newpassword
        })
        .then(users => res.json({ success: true, users: users }))
        .catch(err => res.json({ success: false, error: err }));
    }
  }
})

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
    const { title, userid, description, price, status } = req.body;
    console.log(req.body);

    const offer = new offers({
      title,
      userid,
      description,
      price,
      status,
    });
    await offer.save();
    res.status(201).json({ message: "offer created successfully", offer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create offer" });
  }
});


app.post("/createCompleteOffer", async (req, res) => {
  try {
    const { title, userid, description, price, status } = req.body;
    console.log(req.body);

    const completedOffer = new completedOffers({
      title,
      userid,
      description,
      price,
      status,
    });
    await completedOffer.save();
    res.status(201).json({ message: "offer created successfully", completedOffer });
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

app.post("/offerInProgress/:userId", async (req, res) => {
  const userId = req.params.id;
  console.log("this is the userId", userId);
  offers.findOneAndUpdate({ userId: userId }, { ...req.body, status: "InProgress" }, {
    new: true,
  })
    .then(updatedOffer => res.json(updatedOffer))
    .catch(err => res.status(400).json(err));
});

app.post("/completeOffer/:userId", async (req, res) => {
  const userId = req.params.id;
  console.log("this is the userId", userId);
  offers.findOneAndUpdate({ userId: userId }, { ...req.body, status: "Complete" }, {
    new: true,
  })
    .then(updatedOffer => res.json(updatedOffer))
    .catch(err => res.status(400).json(err));
});
app.post("/cancelOffer/:userId", async (req, res) => {
  const userId = req.params.id;
  console.log("this is the userId", userId);
  offers.findOneAndUpdate({ userId: userId }, { ...req.body, status: "Cancel" }, {
    new: true,
  })
    .then(updatedOffer => res.json(updatedOffer))
    .catch(err => res.status(400).json(err));
});
app.post("/waitingOffer/:userId", async (req, res) => {
  const userId = req.params.id;
  console.log("this is the userId", userId);
  offers.findOneAndUpdate({ userId: userId }, { ...req.body, status: "Waiting" }, {
    new: true,
  })
    .then(updatedOffer => res.json(updatedOffer))
    .catch(err => res.status(400).json(err));
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


app.post("/updateDisabled/:id", async (req, res) => {
  const id = req.params.id
  const value = req.body.disabled
  console.log("this is the id", id)
  console.log("this is the value", value)
  users.findByIdAndUpdate(id, req.body, {
    disabled: true,
  })
    .then(users => res.json({ success: true }))
    .catch(err => res.json({ success: true }))
});

// 
app.use(express.urlencoded({ extended: true }));
require("./app/routes/form.routes")(app)
require("./app/routes/question.routes")(app)
require("./app/routes/answer.routes")(app)
require("./app/routes/comment.routes")(app)
require("./app/routes/thread.routes")(app)
require("./app/routes/forumReport.routes")(app)
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


