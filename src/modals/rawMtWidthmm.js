const mongoose = require("mongoose");

const RawMtWidthmmSchema = mongoose.Schema({
  name: { type: String, required: true },
});

const RawMtWidthmm = mongoose.model("RawMtWidthmm", RawMtWidthmmSchema);

module.exports = RawMtWidthmm;
