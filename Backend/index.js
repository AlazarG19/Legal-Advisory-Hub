const express = require('express')
const app = express()
const db = require("./app/models");
const cors = require("cors")
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
require("./app/routes/question.routes")(app)
require("./app/routes/answer.routes")(app)
require("./app/routes/comment.routes")(app)
require("./app/routes/thread.routes")(app)
app.listen(PORT, () => {
    console.log(`Server is running on portl ${PORT}.`);
});