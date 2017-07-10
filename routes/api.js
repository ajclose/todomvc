const express = require('express')
const router = express.Router()
const Todo = require('../models/todos')
let order = 0

router.get('/api/todos', function(req, res) {
  Todo.find()
  .sort('order')
  .then(function(todos) {
    res.json(todos)
  }).catch(function(error) {
    res.status(422).json(error)
  })
})

router.post('/api/todos', function(req, res) {
  console.log(req.body);
  const todo = new Todo()
  todo.title = req.body.title
  todo.order = req.body.order
  todo.completed = req.body.completed
  todo.save()
  .then(function(todo) {
    res.json(todo)
  }).catch(function(error) {
    res.status(422).json(error)
  })
})

router.get('/api/todos/:id', function(req, res) {
  Todo.findOne({_id: req.params.id})
  .then(function(todo) {
    res.json(todo)
  }).catch(function(error) {
    res.status(422).json(error)
  })
})

router.put('/api/todos/:id', function(req, res) {
  Todo.findOne({_id: req.params.id})
  .then(function(todo) {
    todo.title = req.body.title
    todo.order = req.body.order
    todo.completed = req.body.completed
    todo.save()
    .then(function(todo) {
      res.json(todo)
    }).catch(function(error) {
      res.status(422).json(error)
    })
  })
})

router.patch('/api/todos/:id', function(req, res) {
  Todo.findOne({_id: req.params.id})
  .then(function(todo) {
    todo.title = req.body.title
    todo.order = req.body.order
    todo.completed = req.body.completed
    todo.save()
    .then(function(todo) {
      res.json(todo)
    }).catch(function(error) {
      res.status(422).json(error)
    })
  })
})

router.delete('/api/todos/:id', function(req, res) {
  Todo.deleteOne({_id: req.params.id})
  .then(function(todo) {
    res.json(todo)
  }).catch(function(error) {
    res.status(422).json(error)
  })
})

module.exports = router
