const express = require("express");
const Controller = require("./controllers/controller");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/binary", Controller.binary);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
