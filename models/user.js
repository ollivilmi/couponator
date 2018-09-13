//Imports
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require(bcrypt),
    SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});
