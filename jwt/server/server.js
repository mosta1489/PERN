const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(3000, () => {
  console.log(`server is running at http://localhost:3000 ...`);
});
