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
  

  // update a user identified by the ud in the request

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    User.updateUser(
      req.params.id,
      new User(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found user with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating user with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };


  // delete a user with the specified id in the request
  exports.delete = (req, res) => {
    User.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found user with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete user with id " + req.params.id
          });
        }
      } else res.send({ message: `User was deleted successfully!` });
    });
  };