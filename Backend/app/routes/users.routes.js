module.exports = app => {
    const getUsers = require("../controllers/users.controller")
    var router = require("express").Router()
    router.post("/", forms.create);
    router.get("/getFreelancers", getUsers);
    app.use('/api/forms', router);
}