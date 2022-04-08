const User = require('../models/User.js');


// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a User
    const user = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      number: req.body.number || false
    });
  
    // Save User in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      else res.send(data);
    });
  };