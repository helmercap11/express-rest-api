module.exports = app => {
    const usercontroller = require("../controllers/UserController.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/create", usercontroller.create);
    // Retrieve all users
    router.get("/users", usercontroller.findAll);
  
    
  
    app.use('/api', router);
  };