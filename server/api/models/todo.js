const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    body: {type: String, required: true},
    priority: {type: Boolean , default: false},
    completed: {type: Boolean, default:false},

});

module.exports = mongoose.model('Todo', todoSchema);