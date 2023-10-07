const fs = require("fs");
const path = require("path"); // commonJs
const os = require("os");
const http = require("http"); // all your framework is written on top of http
const express = require("express");
const app = express();
const User = require("./user");
// import fs from "fs";

// Event Emitter model

// const EventEmitter = require("events");
// const myEmmiter = new EventEmitter();

// class Logger extends EventEmitter {
//   info(e) {}
//   error(e) {}
//   warn(e) {}
//   debug(e) {}
// }

// const logger = new Logger();

// logger.info("");
// myEmmiter.on("incomingRequests", (...args) => {
//   // listening to event emitters
//   console.log("Inside event emitter", args);
// });

// myEmmiter.emit("incomingRequests", 1, 2, 3); // passed an event of type incoming requests
// 8080 -> www.google.com -> DNS resolution -> IP address, 3000/8080/4000, service discovery -> edureka - netflix
// const PORT = 3000;
// const server = http.createServer(function (req, res) {
//   if (req.url === "/users") {
//     console.log(req.url);
//     const users = ["Rahul", "ROhit", "Anoop", "John"];
//     res.writeHead(200, "Content-Type: application/json");
//     res.end(JSON.stringify(users));
//   } else if (req.url === "/homepage") {
//     const file = fs.readFile(
//       path.join(__dirname, "index.html"),
//       "utf-8",
//       (err, data) => {
//         if (err) {
//           res.writeHead(404, "Content-Type: application/json");
//           res.end("Data not found");
//         } else {
//           res.writeHead(200, "Content-Type: application/json");
//           res.end(data);
//         }
//       }
//     );
//   }
// });
// // express, loopback, koa
// server.listen(PORT);

//127.0.0.1
// controllers -> Service -> Model -> DBs

// mongodb
// mongoose ORM/ODM + MVC express.js
app.get("/home", (req, res) => {
  const user = new User();
  res.json({ message: user.getUser(), status: "200" });
});

app.post();
app.delete();
app.patch();
app.put();

app.listen("8080", () => {
  console.log("express server listening at PORT 8080");
});

// Http request -> response cycle
// MVC -

// GET - Reading the data/ fetching the data
// POST - creation of that type of entity
// PUT - updates, updates entire object
// PATCH - updates, it does not update entire object
// DELETE - user/id

const user = {
  name: "John",
  age: 27,
  gender: "M",
  id: 14,
};

// SQL vs NOSQL
// DB       DB
// Table    Collection
// Row      Document
// Index    Index
// Column   Key

// Mongodb 4 version aggregation

// Mongoose - ORM - Object Relational Mapping
// Mongoose Schema -> MongoDb Collection

// const mongoose = require("mongoose");

// const schema = new mongoose.schema();

// const users = schema({

// })

// MVC
