const mongoose = require("mongoose");
const validator = require("validator");

const clientSchema = mongoose.Schema({
  Name: { type: String, required: true },
  PhoneNumber: { type: Number, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validator.isEmail, "plz provide a valid email"],
  },
  Address: { type: String, required: true },
  City: { type: String, required: true },
  pinCode: { type: String, required: true },
});

const Client = mongoose.model("client", clientSchema);

module.exports = Client;
