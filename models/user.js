const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model, password not hashed / salted, will look up later
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    spent_money: {
      type: Number,
      default: 0
    },
    prev_login {
      type: Date
    }
    /*
    purchases {

    }
    coupons: {

    }
    */
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
