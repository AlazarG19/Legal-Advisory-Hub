module.exports = app => {
    const comment = require("../controllers/comment.controller");
    var router = require("express").Router();
    // Create a new comment
    router.post("/", comment.create);
    // Retrieve all comment
    router.get("/all/:id", comment.findAll);
    // Retrieve a single comment with id
    router.get("/:id", comment.findOne);
    // Update a comment with id
    router.put("/:id", comment.update);
    // Delete a comment with with id
    router.delete("/:id", comment.delete);
    // Delete all comment
    router.delete("/", comment.deleteAll);
    app.use('/api/comments', router);
  };