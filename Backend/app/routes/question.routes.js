module.exports = app => {
    const question = require("../controllers/question.controller");
    var router = require("express").Router()
    // router.post("/", forms.create);
    router.post("/", question.create);
    // Retrieve all Question
    router.get("/", question.findAll);
    router.get("/category/:id", question.findCategories);
    // Retrieve a single question with id
    router.get("/:id", question.findOne);
    // Update a question with id
    router.put("/:id", question.update);
    // Delete a question with with id
    router.delete("/:id", question.delete);
    // Delete all question
    router.delete("/", question.deleteAll);

    router.post('/upvote/:id', question.updateOne);
    
    app.use('/api/questions', router);
  };