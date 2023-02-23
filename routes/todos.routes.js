const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todos.controller');
const todoValidator = require('../validators/todo.validator');
router.post('/api/todos',  todoValidator.createTodo, todoController.createTodo);

router.get('/api/todos', todoController.getAllTodos);

router.get('/api/todos/:id', todoValidator.getOrDeleteTodo, todoController.getTodo);

router.put('/api/todos/:id', todoValidator.updateTodo, todoController.updateTodo);

router.delete('/api/todos/:id', todoValidator.getOrDeleteTodo, todoController.deleteTodo);


module.exports = router;