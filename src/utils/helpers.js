const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

exports.comparePassword = (userFoundPassword, password) => {
  return bcrypt.compareSync(userFoundPassword, password);
};

exports.createAndsendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  res.status(statusCode).json({
    token,
    user,
  });

  const decode = jwt_decode(token);
  console.log("decode:", decode);
};

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
