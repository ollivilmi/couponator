const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create purchase Schema & model
const PurchaseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  }
});

const Purchase = mongoose.model('purchase', PurchaseSchema);

module.exports = Purchase;
