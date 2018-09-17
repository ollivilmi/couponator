const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create coupon Schema & model

const CouponSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required : true
  },
  reward_value: {
    type: Number,
    required: true
  },
  image: {
    type: String //link to the URL
  }
});

const Coupon = mongoose.model('coupon', CouponSchema);

module.exports = Coupon;
