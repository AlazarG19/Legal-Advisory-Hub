const express = require('express')
const app = express()
const db = require("./app/models");
const cors = require("cors")
const axios = require('axios');
const { Server } = require('socket.io');

const users = require('./app/models/users');
const offers = require('./app/models/offers');
const room = require('./app/models/room');
const message = require('./app/models/messages');

const users = require('./models/users');
const offers = require('./models/offers');
const room = require('./models/room');
const message = require('./models/messages');



const CHAPA_AUTH_KEY = 'CHASECK_TEST-AluGHWd8Xjp9Ya6voAW7CERLkf6JXjEK';

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
    //  return_url: "http://localhost:5173/chat/6605179e271406574eb44e91",
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




app.get('/getFreelancers', (req, res) => {
    users.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err));
});


require("dotenv").config();
//enale sever accept json 
app.use(express.json())
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.get("/", async (req, res) => {
    return res.send("hello")
})

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));




const CHAPA_AUTH_KEY = 'CHASECK_TEST-AluGHWd8Xjp9Ya6voAW7CERLkf6JXjEK';

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




app.get('/getFreelancers', (req, res) => {
    users.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err));
});


app.get('/getFreelancer/:id', (req, res) => {
    const id = req.params.id;
    users.findById({_id:id})
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.get('/getUser/:username', (req, res) => {
    const username = req.params.username;
    users.find({username:username})
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
    offers.find({userid:id})
        .then(offers => res.json(offers))
        .catch(err => res.json(err));
});

app.get('/getRoom/:id', (req, res) => {
    const id = req.params.id;
    room.find({userId:id})
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
    message.find({roomId:id})
        .then(messages => res.json(messages))
        .catch(err => res.json(err));
  });




db.mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

//enale sever accept json 
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
require("./app/routes/form.routes")(app)
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