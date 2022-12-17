const ItemName = require("../modals/itemName");
const Points = require("../modals/points");

exports.pointAnditem = async (req, res, next) => {
  try {
    let createdElement;
    if (req.body.type == "itemname") {
      createdElement = await ItemName.create({
        name: req.body.name,
        productType: req.body.productType,
      });
    } else {
      createdElement = await Points.create({
        value: req.body.value,
        itemName: req.body.itemName,
      });
    }
    res.status(201).send(createdElement);
  } catch (error) {
    console.log(error);
  }
};

exports.getItemname = async (req, res, next) => {
  try {
    const allItemname = await ItemName.find({ productType: req.params.id });
    res.status(200).send(allItemname);
  } catch (error) {
    console.log(error);
  }
};

exports.getPoints = async (req, res, next) => {
  try {
    const allPointsname = await Points.find({ itemName: req.params.id });
    res.status(200).send(allPointsname);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllItems = async (req, res, next) => {
  try {
    const allItems = await ItemName.find({}).populate("productType");
    res.status(200).send(allItems);
  } catch (error) {
    console.log(error);
  }
};
exports.getAllPoints = async (req, res, next) => {
  try {
    const allPoints = await Points.find({}).populate("itemName");
    res.status(200).send(allPoints);
  } catch (error) {
    console.log(error);
  }
};
