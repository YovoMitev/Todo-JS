const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Todo = require('../models/todo');

const todoBaseUrl = 'http://localhost:3000/todos/';

router.get('/', (req, res, next) => {
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

router.post('/', (req, res, next) => {
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
                        url: todoBaseUrl + result._id
                    }
                }
            })
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;