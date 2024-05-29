module.exports = app => {
    const thread = require("../controllers/thread.controller");
    var router = require("express").Router();
    // Create a new thread
    router.post("/", thread.create);
    // Retrieve all thread
    router.get("/all/:id", thread.findAll)
    // Delete all thread
    router.delete("/:id", thread.deleteAll);
    app.use('/api/threads', router);
  };