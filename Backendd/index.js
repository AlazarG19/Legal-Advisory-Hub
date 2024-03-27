const express = require('express')
const app = express()
const cors = require("cors")
require("dotenv").config();
//enale sever accept json 
app.use(express.json())
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.get("/", async (req, res) => {

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

app.listen(PORT, () => {
    console.log(`Server is running on portl ${PORT}.`);
});