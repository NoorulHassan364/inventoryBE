const mongoose = require("mongoose");

const productionWeightSchema = mongoose.Schema({
  polishedPipe: {
    type: String,
    required: true,
  },
  blackPipe: {
    type: String,
    required: true,
  },
  smallPipe: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: new Date() },
});

const productionWeight = mongoose.model(
  "productionWeight",
  productionWeightSchema
);

module.exports = productionWeight;
