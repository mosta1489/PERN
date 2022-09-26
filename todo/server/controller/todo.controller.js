const dataBase = require("../model/todo.model");

const getAllTodos = async (_, res) => {
  try {
    const allTodos = await dataBase.getAllTodos();
    res.status(200).json(allTodos.rows);
  } catch (err) {
    res.status(400).json({ err: err.msg });
  }
};

const getOneTodo = async (req, res) => {
  try {
    const todo = await dataBase.getOneTodo(req.params.id);
    res.status(200).json(todo.rows[0]);
  } catch (err) {
    res.status(400).json({ err: err.msg });
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = await dataBase.createTodo(req.body.description);
    res.status(200).json(newTodo.rows);
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await dataBase.updateTodo(req.params.id, req.body.description);
    res.status(200).json(todo.rows[0]);
  } catch (err) {
    res.status(400).json({ err: err.msg });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await dataBase.deleteTodo(req.params.id);
    res.status(200).json("todo was deleted");
  } catch (err) {
    res.status(400).json({ err: err.msg });
  }
};

module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
