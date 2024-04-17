const mongoose = require('mongoose')
const figSchema = mongoose.Schema({
    name: String,
    size: String,
    age: {
        type: Number,
        min: [0, "age must be greater than or equal to 0"],
        max: [100, "Age must not be greater than 100"]
    },
    is_poisonous: Boolean
})

module.exports = mongoose.model("Fig", figSchema)