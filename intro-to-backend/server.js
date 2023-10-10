const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./dbConfig/dbConfig");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;

mongoose
  .connect(dbConfig.dbUrl)
  .then((response) => console.log("connected to the database"))
  .catch((err) => console.log("failed to connect to the database", err));

app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.json({ status: 200, message: "application running fine" });
});

require("./routes/user.routes")(app);

app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
});

// GET
// POST
// PUT
// DELETE
// PATCH

// MVC - Model, view controller

// controller (definition of route is done) -> service (core logic of that API) - > model (you do inserting/update/modification) in the database
