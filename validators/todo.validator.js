const {
    validate,
    Joi
} = require('express-validation');
const createTodo = validate({
    body: Joi.object({
        title: Joi.string().required(),
        description: Joi.string(),
    }),
}, {
    statusCode: 422,
})

const updateTodo = validate({
    params: Joi.object({
        id: Joi.number().required()
    }),
    body: Joi.object({
        title: Joi.string(),
        description: Joi.string(),
        status: Joi.string().allow('pending', 'doing', 'done')
    }),
}, {
    statusCode: 422,
})

const getOrDeleteTodo = validate({
    params: Joi.object({
        id: Joi.number().required()
    })
}, {
    statusCode: 422,
})

module.exports = {
    createTodo,
    updateTodo,
    getOrDeleteTodo
};