/* eslint-disable no-undef */
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const todoRouter = require("./router/todo.router");
dotenv.config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/todo", todoRouter);

app.listen(port, () => {
  console.log("server is listening on http://localhost:3000");
});
