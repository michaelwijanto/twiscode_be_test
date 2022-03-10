const express = require("express");
const Controller = require("./controllers/controller");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/binary", Controller.binary);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
