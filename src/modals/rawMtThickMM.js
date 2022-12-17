const mongoose = require("mongoose");

const RawMtThickmmSchema = mongoose.Schema({
  name: { type: String, required: true },
  widthMM: {
    type: mongoose.Schema.ObjectId,
    ref: "RawMtWidthmm",
    required: true,
  },
});

const RawMtThickmm = mongoose.model("RawMtThickmm", RawMtThickmmSchema);

module.exports = RawMtThickmm;
