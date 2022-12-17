const rawMtWidthmm = require("../modals/rawMtWidthmm");
const rawMtThickMM = require("../modals/rawMtThickMM");

// create Product
exports.AddWidthMM = async (req, res, next) => {
  try {
    const createWidthMM = await rawMtWidthmm.create(req.body);
    res.status(201).send(createWidthMM);
  } catch (error) {
    console.log(error);
  }
};
// get product
exports.getWidthMM = async (req, res, next) => {
  try {
    const allWidthMM = await rawMtWidthmm.find({});
    res.status(200).send(allWidthMM);
  } catch (error) {
    console.log(error);
  }
};

// create Product
exports.AddThickMM = async (req, res, next) => {
  try {
    const createThickMM = await rawMtThickMM.create(req.body);
    res.status(201).send(createThickMM);
  } catch (error) {
    console.log(error);
  }
};

exports.getThickMM = async (req, res, next) => {
  try {
    const allThickMM = await rawMtThickMM.find({ widthMM: req.params.id });
    res.status(200).send(allThickMM);
  } catch (error) {
    console.log(error);
  }
};
