const db = require("../models")
const Form = db.forms

exports.create = (req, res) => {
    console.log("req.body", req.body)
    const form = new Form({
        sections: req.body.sections,
        formtext: req.body.formtext,
        formname: req.body.formname,
        formdescription: req.body.formdescription,
        formid: req.body.formid,
    })
    form.save(form)
        .then(data => {
            console.log("---------------data")
            console.log(data)
            console.log("---------------dataend")
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
            console.log("data")
            console.log(data)
            res.send(data);
        }
    )
        .catch(err => {
            res.status(500).send({
                message: err.messsage || "Some error occured while retrieving form data"
            })
        })
}
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log("id")
    console.log(id)
    Form.find({ "formid": id })
        .then(data => {
            console.log(data)
            if (!data)
                res.status(404).send({ message: "Not found Post with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Blog with id=" + id });
        });
};