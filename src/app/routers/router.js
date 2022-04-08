module.exports = app => {
    const usercontroller = require("../controllers/UserController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", usercontroller.create);
  
    
  
    app.use('/api', router);
  };