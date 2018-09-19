const express = require("express");
const router = express.Router();

//import schemas
const Store = require("../models/store");

//GET

//get a list of stores from the db

router.get("/stores", function(req, res, next) {
  Store.find({}).then(function(stores) {
    res.send(stores);
  });
});

/*
//get a list of stores nearby (works but something wrong with measuring distance)
router.get("/stores", function(req, res, next) {
  Store.aggregate()
    .near({
      geometry: "Point",
      near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
      maxDistance: 1000,
      spherical: true,
      distanceField: "distance"
    })
    .then(function(stores) {
      res.send(stores);
    });
});
*/

//POST

//add a new store to the db
router.post("/stores", function(req, res, next) {
  Store.create(req.body)
    .then(function(store) {
      res.send(store);
    })
    .catch(next);
});

//PUT

//update store in the db
router.put("/stores/:id", function(req, res, next) {
  res.send({ type: "PUT" });
});

//DELETE

//delete store from db
router.delete("/stores/:id", function(req, res, next) {
  Store.findByIdAndRemove({ _id: req.params.id })
    .then(function(store) {
      res.send(store);
    })
    .catch(next);
});

module.exports = router;
