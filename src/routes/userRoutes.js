const express = require("express");
const User = require("../controller/userController");

const Router = express.Router();

Router.post("/register", User.registerUser);
Router.post("/login", User.login);

module.exports = Router;
