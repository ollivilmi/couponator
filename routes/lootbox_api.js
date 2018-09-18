const express = require ('express');
const router = express.Router();

const Coupon = require('../models/coupon');

//GET

//get a list of coupons from the db TODO
router.get('/coupons', function(req, res, next) {
  res.send({type: 'GET'});
});

//POST

//add a new coupon to the db
router.post('/coupons', function(req, res, next) {
  Coupon.create(req.body).then(function(coupon){
    res.send(coupon);
  }).catch(next);
});

//PUT

//update coupon in the db
router.put('/coupons/:id', function(req, res, next){
    res.send({type: 'PUT'});
});

//DELETE

//delete coupon from db
router.delete('/coupons/:id', function(req, res, next){
    Coupon.findByidAndRemove({_id});
    res.send({type: 'DELETE'});
});

module.exports = router;
