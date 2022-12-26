const mongoose = require("mongoose");

const requestedRawMSchema = mongoose.Schema({
  widthMM: {
    type: String,
    required: true,
  },
  thickMM: {
    type: String,
    required: true,
  },
  weightQtn: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

const requestedRawM = mongoose.model("requestedRawM", requestedRawMSchema);

module.exports = requestedRawM;
