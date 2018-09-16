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
    monthly_tresholds: [Number],
    require: true
    /*
    coupons: {

    }
    */
});

const Store = mongoose.model('store', StoreSchema);

module.exports = Store;
