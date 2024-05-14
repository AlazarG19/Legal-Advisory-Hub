module.exports = app => {
    const forms = require("../controllers/form.controller.js")
    var router = require("express").Router()
    router.post("/", forms.create);
    router.get("/", forms.findAll);
    router.get("/:id", forms.findOne)
    app.use('/api/forms', router);
}