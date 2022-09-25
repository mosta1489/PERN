const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db/db.js");
// middleware
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  await db.query("SELECT * FROM todo;", (err, data) => {
    console.clear();
    console.table(data.rows);
    res.json(data.rows);
    db.end();
  });
});

app.listen(3000, () => {
  console.log("server is listening on http://localhost:3000");
});
