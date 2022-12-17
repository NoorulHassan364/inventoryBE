const mongoose = require("mongoose");
const validator = require("validator");

const vendorSchema = mongoose.Schema({
  Name: { type: String, required: true },
  PhoneNumber: { type: Number, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validator.isEmail, "plz provide a valid email"],
  },
  Address1: { type: String, required: true },
  Address2: { type: String, required: true },
  State: { type: String, required: true },
  pinCode: { type: String, required: true },
  vendorCode: { type: String, required: true },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
