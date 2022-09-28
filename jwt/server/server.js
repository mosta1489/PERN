const express = require("express");
const app = express();
// const connection = require("./model/connectDB");
const cors = require("cors");
const jwtAuth = require("./router/jwt.rout");
const dashboard = require("./router/dashboard.rout");
app.use(cors());
app.use(express.json());

app.use("/jwt", jwtAuth);
app.use("/dashboard", dashboard);

app.listen(3000, () => {
  console.log(`server is running at http://localhost:3000 ...`);
});
