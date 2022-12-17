const User = require("../modals/userModal");

const { createAndsendToken, comparePassword } = require("../utils/helpers");

exports.registerUser = async (req, res, next) => {
  try {
    const isUserFound = await User.find({ email: req.body.email });
    if (isUserFound.length > 0) {
      res.status(400).send("User Already Exist");
    } else {
      const createUser = await User.create(req.body);
      res.status(201).send(createUser);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound || !comparePassword(password, userFound.password)) {
      res.status(400).send("Invalid Email or password");
    } else {
      createAndsendToken(userFound, 200, res);
    }
  } catch (error) {
    console.log(error);
  }
};
