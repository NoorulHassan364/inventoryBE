const mongoose = require("mongoose");

const onGoingReportSchema = mongoose.Schema({
  machine: {
    type: mongoose.Schema.ObjectId,
    ref: "productionMachine",
    required: true,
  },
  widthMM: {
    type: String,
    required: true,
  },
  thickMM: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  weightQtn: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

const onGoingReport = mongoose.model("onGoingReport", onGoingReportSchema);

module.exports = onGoingReport;
