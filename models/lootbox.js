const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create lootbox Schema & model

const LootboxSchema = new Schema({
  size: { //small, medium, large
    type: String,
    required: true
  },
  description: {
    type: String,
    required : true
  },
  content: { //in euro's
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coupon'
  },
  image: {
    type: String //link to the URL
  }
});

const Lootbox = mongoose.model('lootbox', LootboxSchema);

module.exports = Lootbox;
