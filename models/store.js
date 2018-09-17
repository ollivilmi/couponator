const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create store Schema & model
const StoreSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    location: { //GeoJSON format
      type: { type: String },
      coordinates: [Number] // longitude, latitude
    },
    return_on_investment: {
      type: Number,
      require: true
    },
    coupons: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Coupon'
    }],
    monthly_tresholds: [Number]

});

const Store = mongoose.model('store', StoreSchema);

module.exports = Store;
