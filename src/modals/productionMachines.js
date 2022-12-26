const mongoose = require("mongoose");
const validator = require("validator");

const machineSchema = mongoose.Schema({
  name: { type: String, required: true },
  stage: {
    type: mongoose.Schema.ObjectId,
    ref: "productionStages",
    required: true,
  },
  uniqueId: { type: String, required: true },
});

const Machine = mongoose.model("productionMachine", machineSchema);

module.exports = Machine;
