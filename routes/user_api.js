const express = require("express");
const router = express.Router();

//import schemas
const User = require("../models/user");

//GET

//get a list of users from the db
router.get("/users", function(req, res, next) {
  User.find({}).then(function(users) {
    res.send(users);
  });
});

//get a user with id
router.get("/users/:id", function(req, res, next) {
  User.findById({ _id: req.params.id }).then(function(user) {
    res.send(user);
  });
});

//POST

//add a new user to the db
router.post("/users", function(req, res, next) {
  User.create(req.body)
    .then(function(user) {
      res.send(user);
    })
    .catch(next);
});

//PUT

//update user in the db
router.put("/users/:id", function(req, res, next) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    User.findOne({ _id: req.params.id }).then(function(user) {
      res.send(user);
    });
  });
});

//DELETE

//delete user from db
router.delete("/users/:id", function(req, res, next) {
  User.findByIdAndRemove({ _id: req.params.id }).then(function(user) {
    res.send(user);
  });
});

module.exports = router;
