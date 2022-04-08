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

  // Retrieve all users from the database (with condition).
exports.findAll = (req, res) => {
    const name = req.query.name;
    User.getAll(name, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
  };


  exports.findOnde = (req, res) => {
      User.findById(req.params.id,(err, data) => {
          if(err) {
              if(err.kind === "not_found"){
                  res.status(404).send({
                      message: `Not found user with id ${req.params.id}.`
                  });
              }else {
                  res.status(500).send({
                      message: "Error retrieving user with id " + req.params.id
                  });
              }
          } else res.send(data)
      });
  };
  