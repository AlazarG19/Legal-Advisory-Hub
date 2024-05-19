module.exports = app => {
    const forms = require("../controllers/form.controller.js")
    var router = require("express").Router()
    router.post("/", forms.create);
    router.get("/", forms.findAll);
    router.get("/:id", forms.findOne)
    router.post("/edit", forms.update)
    router.post("/delete/:id", forms.delete)
    app.use('/api/forms', router);
}