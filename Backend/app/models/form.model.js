const { mongoose } = require(".");

module.exports = mongoose => {
    const Form = mongoose.model(
        "form",
        mongoose.Schema({
            sections: {
                type: Object
            },
            formtext: {
                type: String
            },
            formid: {
                type: String
            },
            formname: {
                type: String
            },
            formdescription: {
                type: String
            },
            category: {
                type: String
            },
            isDeleted: {
                type: Number,
                default: 0
            },
            deletedAt: {
                type: Date
            }
        }, { timestamps: true })
    )
    return Form
}