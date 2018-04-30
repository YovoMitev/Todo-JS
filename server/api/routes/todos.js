const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Todo = require('../models/todo');

const todoBaseUrl = 'http://localhost:3000/todos/';

router.get('/all', (req, res, next) => {
    Todo.find()
        .select('title body _id ')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                todos: docs.map(doc => {
                    return {
                        title: doc.title,
                        body: doc.body,
                        _id: doc._id,
                        request: {
                            type: 'GET',
                            url: todoBaseUrl + doc._id
                        }
                    }
                })
            };
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
});

router.post('/create', (req, res, next) => {
    const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        body: req.body.body,
        priority: false,
        completed: false
    });
    todo.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Todo created successfully",
                createdTodo: {
                    title: result.title,
                    body: result.body,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: todoBaseUrl + 'details/' + result._id
                    }
                }
            })
        })
        .catch(err => {
            console.log(err)
        });
});

router.get('/details/:todoId', (req, res, next) => {
    const id = req.params.todoId;
    Todo.findById(id)
        .select('title body _id priority completed')
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json({
                    todo: doc,
                    request: {
                        type: 'GET',
                        description: 'You can get all todos with url below',
                        url: todoBaseUrl + '/all'
                    }
                })
            } else {
                res.status(404).json({
                    message: 'Not valid entry found for provided ID'
                })
            }

        })
        .catch(err => {
            res.stat(500).json({
                error: err
            })
        })
});

// for update you have to send [] with objects that contains propName and value for every  property you want to update
router.patch('/update/:todoId', (req, res, next) => {
    const id = req.params.todoId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Todo.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Todo Updated',
                request: {
                    type: 'GET',
                    url: todoBaseUrl + 'details/' + id
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
});

router.delete('/delete/:todoId', (req, res, next) => {
    const id = req.params.todoId;
    Todo.remove({_id:id})
        .exec()
        .then(result => {
            res.status(200).json({
                message:'Todo deleted'
            })
        })
        .catch(err =>{
            res.status(500).json({
                error:err
            })
        })
});
module.exports = router;