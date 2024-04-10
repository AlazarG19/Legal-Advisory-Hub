module.exports = app => {
    const answer = require("../controllers/answer.controller");
    var router = require("express").Router();
    // Create a new answer
    router.post("/", answer.create);
    // Retrieve all Answer
    router.get("/", answer.findAll);
    // Retrieve a single answer with id
    router.get("/:id", answer.findOne);
    // Update a answer with id
    router.put("/:id", answer.update);
    // Delete a answer with with id
    router.delete("/:id", answer.delete);
    // Delete all answer
    router.delete("/", answer.deleteAll);
    app.use('/api/answers', router);
  };