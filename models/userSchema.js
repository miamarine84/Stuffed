const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  liked:[{
    type:String
  }],
  username: { type: String, required: true,unique:true},
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
