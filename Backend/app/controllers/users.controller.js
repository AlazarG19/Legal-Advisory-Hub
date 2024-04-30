const users = require("../models/users")

const getUsers (req, res) => { 
    users.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err));
    }
exports.create = (req, res) => {
    console.log(req.body)
    const form = new Form({
        section: req.body.section
    })
    form.save(form)
        .then(data => {
            console.log(data)
            console.log(data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the form data"
            })
        })
}

exports.findAll = (req, res) => {
    Form.find().then(
        data => {
            res.send(data);
        }
    )
        .catch(err => {
            res.status(500).send({
                message: err.messsage || "Some error occured while retrieving form data"
            })
        })
}

module.exports = {getUsers}