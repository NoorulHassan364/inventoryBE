const mongoose = require("mongoose");

const rawMpurchaseOrderSchema = mongoose.Schema({
  invoice: { type: Number, required: true },
  vendor: {
    type: mongoose.Schema.ObjectId,
    ref: "Vendor",
    required: true,
  },
  widthMM: {
    type: mongoose.Schema.ObjectId,
    ref: "RawMtWidthmm",
    required: true,
  },
  thickMM: {
    type: mongoose.Schema.ObjectId,
    ref: "RawMtThickmm",
    required: true,
  },
  weightQtn: { type: String, required: true },
  paymentMode: { type: String, required: true },
  status: {
    type: String,
    default: "",
  },
  photo: { type: String, default: "" },
});

const rawMpurchaseOrder = mongoose.model(
  "rawMpurchaseOrder",
  rawMpurchaseOrderSchema
);

module.exports = rawMpurchaseOrder;
