const db = require("../models");
const ForumReport = db.forumReports;

// Create and Save a new report
exports.create = (req, res) => {
  // Validate request
  if (!req.body.reportType) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a new report
  const forumReport = new ForumReport({
      reportType:req.body.reportType,
			reportedObjectId:req.body.reportedObjectId,
			reportedBy:req.body.reportedBy,
      reason:req.body.reason,
      resolved: false
        });
  // Save a report in the database
  forumReport.save(forumReport)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the report."
      });
    });
};

// Retrieve all reports from the database.
exports.findAll = (req, res) => {
  // const   resolvedStatus =  req.params.id;
  ForumReport.find().then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reports."
      });
    });
};

// Find a single report with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  ForumReport.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found report with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving report with id=" + id });
    });
};

// Update a report by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  ForumReport.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Forum Report with  with id=${id}. Maybe ForumReport was not found!`
        });
      } else res.send({ message: "Forum Report was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Forum Report with id=" + id
      });
    });
};

// Delete a Forum Report with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  ForumReport.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete ForumReport with id=${id}. Maybe ForumReport was not found!`
        });
      } else {
        res.send({
          message: "ForumReport was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete ForumReport with id=" + id
      });
    });
};