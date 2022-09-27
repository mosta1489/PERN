const express = require("express");
const app = express();
const connection = require("./model/connectDB");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await connection.query("SELECT * FROM users");

  res.json(data.rows);
});

app.listen(3000, () => {
  console.log(`server is running at http://localhost:3000 ...`);
});
