const express = require('express');
const app = express();
var http = require('http');
const dotenv = require('dotenv');
dotenv.config();

// Headers before the routes are defined
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Strict-Transport-Security", "max-age=3600");
  res.setHeader("Cache-control", "no-store");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("X-Frame-Options", "ALLOW-FROM http://localhost");
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Telling the Express to use routes declared into controller 
const data = require('./controller');
app.use(data);

// Get port from environment and store in Express
var port = process.env.PORT || 3000;
app.set('port', port);

// Create HTTP server
var server = http.createServer(app);

// Listen on provided port
server.listen(port);
server.on('error', (error) => {
  throw error
});
server.on('listening', () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
