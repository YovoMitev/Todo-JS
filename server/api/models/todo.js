const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    body: {type: String, required: true},
    priority: {type: Boolean},
    completed: {type: Boolean},

});

module.exports = mongoose.model('Todo', todoSchema);