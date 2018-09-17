const express = require ('express');
const router = express.Router();

//import schemas
const Store = require('../models/store');




//GET

//get a list of users from the db TODO
router.get('/stores', function(req, res, next) {
  res.send({type: 'GET'});
});

//POST

//add a new user to the db
router.post('/stores', function(req, res, next) {
  User.create(req.body).then(function(user){
    res.send(user);
  }).catch(next);
});

//PUT

//update user in the db
router.put('/stores/:id', function(req, res, next){
    res.send({type: 'PUT'});
});

//DELETE

//delete user from db
router.delete('/stores/:id', function(req, res, next){
    User.findByidAndRemove({_id});
    res.send({type: 'DELETE'});
});

module.exports = router;
