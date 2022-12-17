const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: { type: String, required: true },
  productType: {
    type: mongoose.Schema.ObjectId,
    ref: "ProductType",
    required: true,
  },
});

const ItemName = mongoose.model("ItemName", itemSchema);

module.exports = ItemName;
