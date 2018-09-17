const express = require ('express');
const router = express.Router();


//import schemas
const Store = require('../models/store');




//GET

//get a list of stores from the db
router.get('/stores', function(req, res, next) {
/* get all
  Store.find({}).then(function(stores) {
    res.send(stores);
  });
  */
  Store.aggregate().near({
   near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
   maxDistance: 100000,
   spherical: true,
   distanceField: "dist.calculated"
  })﻿.then(function(stores) {
    res.send(stores);
  });
});

//POST

//add a new store to the db
router.post('/stores', function(req, res, next) {
  Store.create(req.body).then(function(store){
    res.send(store);
  }).catch(next);
});

//PUT

//update store in the db
router.put('/stores/:id', function(req, res, next){
    res.send({type: 'PUT'});
});

//DELETE

//delete store from db
router.delete('/stores/:id', function(req, res, next){
    Store.findByidAndRemove({_id});
    res.send({type: 'DELETE'});
});

module.exports = router;
