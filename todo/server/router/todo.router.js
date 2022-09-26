const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todo.controller");

router.get("/", getAllTodos);

router.get("/:id", getOneTodo);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
