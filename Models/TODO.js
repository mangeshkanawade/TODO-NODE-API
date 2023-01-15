const { default: mongoose } = require("mongoose");

var Task = mongoose.model('Task', {
    Task: String,
    IsComplete : Boolean,
    IsActive : Boolean
})

module.exports = { Task } 