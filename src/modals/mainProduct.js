const mongoose = require("mongoose");

const ProductTypetSchema = mongoose.Schema({
  name: { type: String, required: true },
});

const ProductType = mongoose.model("ProductType", ProductTypetSchema);

module.exports = ProductType;
