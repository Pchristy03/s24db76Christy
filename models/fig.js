const mongoose = require('mongoose')
const figSchema = mongoose.Schema({
    name: String,
    size: String,
    age: Number,
    is_poisonous: Boolean
})

module.exports = mongoose.model("Fig", figSchema)