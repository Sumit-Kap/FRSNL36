const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersScema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email_id: { type: String, required: true },
  phone_number: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("Users", UsersScema);

module.exports = User;
