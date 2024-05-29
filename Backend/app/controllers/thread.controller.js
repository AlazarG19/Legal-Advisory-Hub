const db = require("../models");
const Thread = db.threads; // Changed from 'Threads' to 'Thread'

// Create and Save a new thread
exports.create = (req, res) => {
  // Validate request
  if (!req.body.userId) {
    res.status(400).send({ message: "userId is required!" });
    return;
  }

  // Create a new thread
  const thread = new Thread({
    userId: req.body.userId,
    conversation: req.body.conversation
  });

  // Save thread in the database
  thread.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the thread."
      });
    });
};

// Retrieve all threads for a user
exports.findAll = (req, res) => {
  const userId = req.params.id; // Changed from 'req.params.id' to 'req.query.userId'
  Thread.find({ userId: userId })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving threads."
      });
    });
};

// Delete all threads for a user
exports.deleteAll = (req, res) => {
  const userId = req.params.id; // Changed from 'req.params.id' to 'req.query.userId'
  Thread.deleteMany({ userId: userId })
    .then(data => {
      res.send({
        message: `${data.deletedCount} Threads were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all threads."
      });
    });
};