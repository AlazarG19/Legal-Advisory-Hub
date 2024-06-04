const db = require("../models");
const Comment = db.comments;

// Create and Save a new comment
exports.create = (req, res) => {
  // Validate request
  if (!req.body.postId) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a new Comment
  const comment = new Comment({
			postId:req.body.postId,
			body:req.body.body,
			author:req.body.author,
      reported:req.body.reported || false,
        });

  // Save a Comment in the database
  comment.save(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the comment."
      });
    });
};

// Retrieve all comment from the database.
exports.findAll = (req, res) => {
  const postId  =  req.params.id;
  Comment.find({postId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments."
      });
    });
};

// Find a single comment with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Comment.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found comment with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving comment with id=" + id });
    });
};

// Update a comment by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Comment.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update comment with  with id=${id}. Maybe comment was not found!`
        });
      } else res.send({ message: "Comment was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating comment with id=" + id
      });
    });
};

// Delete a Comment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Comment.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete comment with id=${id}. Maybe comment was not found!`
        });
      } else {
        res.send({
          message: "Comment was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Comment with id=" + id
      });
    });
};

// Delete all comments from the database.
exports.deleteAll = (req, res) => {
    Comment.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Comments were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Comments."
      });
    });
};