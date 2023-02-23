const logger = require('../config/winston');
const todoService = require('../services/todo.service');

const createTodo = async(req, res, next) => {
    try {
    const todo = await todoService.createTodo(req.body);
    return res.json(todo);
    } catch (error) {
        logger.error("Error: ", error);
        return res.status(400).send(error);
    } 
}

const updateTodo = async(req, res, next) => {
    try {
    const todo = await todoService.updateTodo(req.body, req.params.id);
    return res.json(todo);
    } catch (error) {
        logger.error("Error: ", error);
        return res.status(400).send(error);
    } 
}
const getAllTodos = async(req, res, next) => {
    try {
    const todos = await todoService.getAllTodos();
    return res.json(todos);
    } catch (error) {
        logger.error("Error: ", error);
        return res.status(400).send(error);
    } 
}
const getTodo = async(req, res, next) => {
    try {
    const todo = await todoService.getTodo(req.params.id);
    return res.json(todo);
    } catch (error) {
        logger.error("Error: ", error);
        return res.status(400).send(error);
    } 
}

const deleteTodo = async(req, res, next) => {
    try {
    const todo = await todoService.deleteTodo(req.params.id);
    return res.json({ message: 'La tarea ha sido eliminada.', todo});
    } catch (error) {
        logger.error("Error: ", error);
        return res.status(400).send(error);
    } 
}

module.exports = {
    createTodo,
    updateTodo,
    getAllTodos,
    getTodo,
    deleteTodo
}