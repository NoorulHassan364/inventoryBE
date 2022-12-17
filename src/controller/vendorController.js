const vendorModel = require("../modals/vendorModel");

exports.addVendor = async (req, res, next) => {
  try {
    const vendorFound = await vendorModel.find({ email: req.body.email });
    if (vendorFound.length > 0) {
      res.status(400).send("vendor Already Exist");
    } else {
      let pinCode = (Math.random() + 1).toString(36).substring(7);
      let vendorCode = (Math.random() + 1).toString(36).substring(7);
      req.body.pinCode = pinCode;
      req.body.vendorCode = vendorCode;
      const vendorClient = await vendorModel.create(req.body);
      res.status(201).send(vendorClient);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getVendor = async (req, res, next) => {
  try {
    const allVendor = await vendorModel.find({});
    res.status(200).send(allVendor);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteVendor = async (req, res, next) => {
  try {
    const removeVendor = await vendorModel.findByIdAndDelete(req.params.id);
    if (removeVendor == null) {
      res.status(400).send("Vendor not Deleted");
    } else {
      res.status(200).send("Vendor Delete Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateVendor = async (req, res, next) => {
  try {
    const upgradeVendor = await vendorModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (upgradeVendor == null) {
      res.status(400).send("Vendor not Updated");
    } else {
      res.status(200).send(upgradeVendor);
    }
  } catch (error) {
    console.log(error);
  }
};
