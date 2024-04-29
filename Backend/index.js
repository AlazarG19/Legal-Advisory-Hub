const express = require('express')
const app = express()
const db = require("./app/models");
const cors = require("cors")
const { Server } = require('socket.io');


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
app.use(express.json())
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