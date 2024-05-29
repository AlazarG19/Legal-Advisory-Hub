const db = require("../models");
const Answer = db.answers;
const mongoose = require('mongoose');
const { Types } = mongoose;

// Create and Save a new answer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create an answer
  const answer = new Answer({
    questionId: req.body.questionId,
    body: req.body.body,
    author: req.body.author,
    upvotes: req.body.upvotes,
    downvotes: req.body.downvotes,
    reported: false
  });

  // Save Answer in the database
  answer.save(answer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the answer."
      });
    });
};

// Retrieve all answers from the database.
exports.findAll = (req, res) => {
  const questionId = req.params.id;
  Answer.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "username",
        as: "userDetails"
      }
    }
  ]).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving answers."
      });
    });

};
// Find a single answer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Answer.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "username",
        as: "userDetails"
      }
    },
    { $match: { _id: new Types.ObjectId(id) } }
  ])
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Answer with id " + id });
      else res.send(data[0]);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Answer with id=" + id });
    });

};

// Update a Answer by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Answer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Answer with  with id=${id}. Maybe Answer was not found!`
        });
      } else res.send({ message: "Answer was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Answer with id=" + id
      });
    });
};

// Delete an Answer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Answer.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Answer  with id=${id}. Maybe Answer was not found!`
        });
      } else {
        res.send({
          message: "Answer was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Answer with id=" + id
      });
    });
};

// Delete all answer from the database.
exports.deleteAll = (req, res) => {
  Answer.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Answer were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Answers."
      });
    });
};