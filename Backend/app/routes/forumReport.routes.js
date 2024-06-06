module.exports = app => {
    const forumReport = require("../controllers/forumReport.controller");
    var router = require("express").Router();
    // Create a new report
    router.post("/", forumReport.create);
    // Retrieve all report
    router.get("/", forumReport.findAll);
    // Retrieve a single report with id
    router.get("/:id", forumReport.findOne);
    // Update a report with id
    router.put("/:id", forumReport.update);
    // Delete a answer with with id
    router.delete("/:id", forumReport.delete);

    app.use('/api/forumreport', router);
  };