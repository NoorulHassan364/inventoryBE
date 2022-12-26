const mongoose = require("mongoose");

const productionAndScrap = mongoose.Schema({
  production: {
    type: String,
    required: true,
  },
  scrap: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: new Date() },
});

const prodAndScrap = mongoose.model("prodAndScrap", productionAndScrap);

module.exports = prodAndScrap;
