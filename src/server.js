var http = require("http");
var express = require("express");
var cors = require('cors');
var app = express();


var corsOptions = {
    origin: "http://localhost:8081"
  };
  app.use(cors(corsOptions));
  // parse requests of content-type - application/json
  app.use(express.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
  });
  require("./app/routers/router.js")(app);
  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });