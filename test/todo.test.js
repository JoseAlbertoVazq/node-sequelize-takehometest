const request = require('supertest');

const app = require('../index');
const todoService = require('../services/todo.service')

describe('API Todo', () => {
  describe('POST /api/todos', () => {
    it('debería crear una nueva tarea', async () => {
      const response = await request(app)
        .post('/api/todos')
        .send({ title: 'Comprar leche', description: 'Comprar leche en la tienda' });

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body.title).toBe('Comprar leche');
      expect(response.body.description).toBe('Comprar leche en la tienda');
    });
  });

  describe('GET /api/todos', () => {
    it('debería obtener una lista de tareas', async () => {
      const response = await request(app).get('/api/todos');

      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /api/todos/:id', () => {
    it('debería obtener una tarea específica según su ID', async () => {
      const todo = await todoService.createTodo({ title: 'Comprar pan', description: 'Comprar pan en la panadería' });

      const response = await request(app).get(`/api/todos/${todo.id}`);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('id', todo.id);
      expect(response.body.title).toBe('Comprar pan');
      expect(response.body.description).toBe('Comprar pan en la panadería');
    });
  });

  describe('PUT /api/todos/:id', () => {
    it('debería actualizar una tarea existente', async () => {
      const todo = await todoService.createTodo({ title: 'Comprar huevos', description: 'Comprar huevos en el supermercado' });

      const response = await request(app)
        .put(`/api/todos/${todo.id}`)
        .send({ title: 'Comprar huevos', description: 'Comprar huevos en la tienda', status: 'done' });

      expect(response.statusCode).toBe(200);
    });
  });

  describe('DELETE /api/todos/:id', () => {
    it('debería eliminar una tarea existente', async () => {
      const todo = await todoService.createTodo({ title: 'Llamar al médico', description: 'Llamar al médico para programar cita' });

      const response = await request(app).delete(`/api/todos/${todo.id}`);

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ message: 'La tarea ha sido eliminada.', todo: 1 });

      const deletedTodo = await todoService.getTodo(todo.id);
      expect(deletedTodo).toBeNull();
    });
  });
});
