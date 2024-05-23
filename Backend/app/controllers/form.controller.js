const db = require("../models")
const Form = db.forms

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
