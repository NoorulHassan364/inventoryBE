const mongoose = require("mongoose");

const pointsSchema = mongoose.Schema({
  value: { type: String, required: true },
  itemName: {
    type: mongoose.Schema.ObjectId,
    ref: "ItemName",
    required: true,
  },
});

const Point = mongoose.model("points", pointsSchema);

module.exports = Point;
