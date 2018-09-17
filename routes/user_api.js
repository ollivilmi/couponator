const express = require ('express');
const router = express.Router();

//import schemas
const User = require('../models/user');
const Coupon = require('../models/coupon');
const Purchase = require('../models/purchase');
const Store = require('../models/store');
const Quest = require('../models/quest');



//GET

//get a list of users from the db TODO
router.get('/users', function(req, res, next) {
  res.send({type: 'GET'});
});

//POST

//add a new user to the db
router.post('/users', function(req, res, next) {
  User.create(req.body).then(function(user){
    res.send(user);
  }).catch(next);
});

//PUT

//update user in the db
router.put('/users/:id', function(req, res, next){
    res.send({type: 'PUT'});
});

//DELETE

//delete user from db
router.delete('/users/:id', function(req, res, next){
    User.findByidAndRemove({_id});
    res.send({type: 'DELETE'});
});

module.exports = router;
