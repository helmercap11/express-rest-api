module.exports = app => {
    const usercontroller = require("../controllers/UserController.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/create", usercontroller.create);
    // Retrieve all users
    router.get("/users", usercontroller.findAll);
    // Retrieve a single user with id
    router.get("/:id", usercontroller.findOnde);
    // Update a useer with id
    router.put("/:id", usercontroller.update);
    // Delete a user with id
    router.delete("/:id", usercontroller.delete);
  
    
  
    app.use('/api', router);
  };