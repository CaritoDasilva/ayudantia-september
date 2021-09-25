const Todo = require('../models/todo.models');

module.exports.findAllTodos = (req, res) => {
    Todo.find()
    .then(allTodos => res.json({todos: allTodos}))
    .catch(err => res.json({error: err}));
}

module.exports.creatNewTodo = (req, res) => {
    Todo.create(req.body)
    .then(newTodo => res.send({todo: newTodo}))
    .catch(err => res.send({errors: err}));
}

module.exports.getOneSingleTodo = (req, res) => {
    Todo.findOne({_id: req.params.id})
    .then(todo => res.json({todo: todo}))
    .catch(err => res.status(404).json(err));
}

module.exports.updateTodo = (req, res) => {
    Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedTodo => res.json({todo: updatedTodo}))
    .catch(err => res.status(404).json(err));
}

module.exports.deleteTodo = (req, res) => {
    Todo.deleteOne({_id: req.params.id})
    .then(response => res.json({response: response}))
    .catch(err => res.json(err))
}