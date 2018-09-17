const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create quest Schema & model
const QuestSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  reward: {
    type: Number,
    required: true
  },
  goal: {
    type: Number,
    required: true
  },
  expiration: {
    type: Date,
    required: true
  }
});

const Quest = mongoose.model('quest', QuestSchema);

module.exports = Quest;
