const Todo = require('../models/todo');
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database.sqlite'
});


const TodoModel = Todo(sequelize, Sequelize);

const createTodo = async (body) => {
    const {
        title,
        description
    } = body;
    return await TodoModel.create({
        title,
        description
    });
}

const getAllTodos = async () => {
    return await TodoModel.findAll();
}

const getTodo = async (id) => {
    return await TodoModel.findOne({where: {id: id}});
}

const updateTodo = async (body, id) => {
    const {
        title,
        description,
        status
    } = body;
    return await TodoModel.update({
        title,
        description,
        status
    }, {
        where: {
            id: id
        }
    });
}

const deleteTodo = async (id) => {
    return await TodoModel.destroy({ where: { id: id } });
}

module.exports = {
    createTodo,
    getAllTodos,
    getTodo,
    updateTodo,
    deleteTodo
}