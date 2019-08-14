// Import express, handlebars and router
var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var router = require('./controllers/burgers_controller.js')

// Init express
var app = express();

// Serve static folder to express
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Init handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Init router in express
app.use(router);

// Define port
// add process.env to look for process environment port used in deployed version
const PORT = process.env.PORT || 5000;

// Listen on a port, callback to log status
app.listen(PORT, () => 
    console.log(`Server is listening on port ${PORT}`));