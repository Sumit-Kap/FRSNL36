console.log("Intro to node.js to all geeksforgeeks learners");
// import fs from "fs"; // ESM
const fs = require("fs"); // commonJs
console.log(__filename, __dirname);

const writer = fs.createWriteStream(`${__dirname}/Gfg.txt`, "utf-8");

writer.write("Welcome learners");

fs.readFile(`${__dirname}/Gfg.txt`, (err, data) => {
  console.log(err, Buffer.from(data));
});

const http = require("http");

http.createServer((req, res) => {});
