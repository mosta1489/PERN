const db = require("./db/db");

class Database {
  static getAllTodos = () => {
    return db.query("SELECT * FROM todo;");
  };

  static getOneTodo = (id) => {
    return db.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
  };

  static createTodo = (description) => {
    return db.query(`INSERT INTO todo  (description) VALUES($1) RETURNING *`, [
      description,
    ]);
  };

  static updateTodo = (id, description) => {
    return db.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
      [description, id]
    );
  };

  static deleteTodo = (id) => {
    return db.query("DELETE FROM todo WHERE todo_id = $1", [id]);
  };
}

module.exports = Database;
