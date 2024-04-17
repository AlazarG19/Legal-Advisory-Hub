const db = require("../models");
const Question = db.questions;

// Create and Save a new question
exports.create = (req, res) => {
  // Validate request
//   if (!req.body.title) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
//   }

  // Create a Question
  const question = new Question({
			title:req.body.title,
			body:req.body.body,
			author:req.body.author,
			upvotes:req.body.upvotes,
			downvotes:req.body.downvotes,
			category:req.body.category
        });

  // Save Question in the database
  question.save(question)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the question."
      });
    });
    // return
};

// Retrieve all question from the database.
exports.findAll = (req, res) => {
  const title  = req.body.title;
  Question.find(title)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving questions."
      });
    });
};
// Retrieve all question of the same categories from the database.
exports.findCategories = (req, res) => {
  const id = req.params.id;

  Question.findById({_id: id})
    .then(result => {
      Question.find({category: result.category})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving questions."
        });
      });    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Category  with id=" + id });
    });

  // console.log(result)

};

// Find a single Question with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Question.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Question with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Question with id=" + id });
    });
};

// Update a Question by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Question.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Question with  with id=${id}. Maybe Question was not found!`
        });
      } else res.send({ message: "Question was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Question with id=" + id
      });
    });
};

// Delete a Question with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Question.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Question with id=${id}. Maybe Question was not found!`
        });
      } else {
        res.send({
          message: "Question was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Question with id=" + id
      });
    });
};

// Delete all Question from the database.
exports.deleteAll = (req, res) => {
    Question.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Question were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Questions."
      });
    });
};