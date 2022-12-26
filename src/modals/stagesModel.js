const mongoose = require("mongoose");

const stagesSchema = mongoose.Schema({
  name: { type: String, required: true },
});

const Stages = mongoose.model("productionStages", stagesSchema);

module.exports = Stages;
