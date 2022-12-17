const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validator.isEmail, "plz provide a valid email"],
  },

  password: { type: String, required: true },
});

// hash Password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }

  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
