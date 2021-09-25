const TodoController = require('../controllers/todo.controllers');

module.exports = app => {
    app.get('/api/todos', TodoController.findAllTodos);
    app.put('/api/todos/update/:id', TodoController.updateTodo);
    app.get('/api/todos/:id', TodoController.getOneSingleTodo);
    app.post('/api/todos/new', TodoController.creatNewTodo);
    app.delete('/api/todos/delete/:id', TodoController.deleteTodo);
}