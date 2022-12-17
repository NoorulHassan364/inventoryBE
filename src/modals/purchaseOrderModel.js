const mongoose = require("mongoose");

const purchaseOrderSchema = mongoose.Schema({
  invoice:{ type: Number, required: true},
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "client",
    required: true,
  },
  productType: {
    type: mongoose.Schema.ObjectId,
    ref: "ProductType",
    required: true,
  },
  itemName: {
    type: mongoose.Schema.ObjectId,
    ref: "ItemName",
    required: true,
  },
  points: {
    type: mongoose.Schema.ObjectId,
    ref: "points",
    required: true,
  },
  Length: { type: String, required: true },

});

const purchaseOrder = mongoose.model("purchaseOrder", purchaseOrderSchema);

module.exports = purchaseOrder;
