const express = require('express');

const server = express();

const actions = require("./actions")
const projects = require("./projects")

server.use(express.json())
// server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some Middleware!</h2>`);
});

//custom middleware


// function logger(req, res, next) {
//   const { method, originalUrl } = req;
//   console.log(`${new Date()} ${method} to ${originalUrl}`);

//   next();
// }

server.use("/api/actions", actions)
server.use("/api/projects", projects)


module.exports = server;