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
        category: req.body.category,
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
                .send({ message: "Error retrieving Form with id=" + id });
        });
};

exports.update = (req, res) => {
    console.log("[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[req.body]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]")
    // console.log(req.body)
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;
    console.log(req.body.formid)
    Form.findOneAndUpdate({ formid: req.body.formid }, req.body, { useFindAndModify: false })
        .then(data => {
            console.log("dataa", data)
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Form with id=${id}. Maybe Form was not found!`
                });
            } else res.send({ message: "Form was updated successfully." });
        })
        .catch(err => {
            console.log("error dataa", err)
            res.status(500).send({
                message: "Error updating Form with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Form.findOneAndDelete({ formid: id })
        .then(data => {
            if (!data) {
                console.log("succeed")
                res.status(404).send({
                    message: `Cannot delete Form, with id=${id}. Maybe Form was not found!`
                });
            } else {
                console.log("failed")
                res.send({
                    message: "Form was deleted successfully!"
                });
            }
        })
        .catch(err => {
            console.log("err")
            res.status(500).send({
                message: "Could not delete Form with id=" + id
            });
        });
};
