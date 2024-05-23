const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.forms = require("./form.model")(mongoose)
module.exports = db;
