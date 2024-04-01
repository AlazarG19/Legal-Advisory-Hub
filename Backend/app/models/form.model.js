const { mongoose } = require(".");

module.exports = mongoose => {
    const Form = mongoose.model(
        "form",
        mongoose.Schema({
            section: {
                type: Object
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