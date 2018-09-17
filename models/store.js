const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

// create store Schema & model
const StoreSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    location: GeoSchema,
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
