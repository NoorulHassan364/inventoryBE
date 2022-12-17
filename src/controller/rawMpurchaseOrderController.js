const rawMpurchaseOrderModel = require("../modals/rawMpurchaseOrderModel");

exports.createRawMPO = async (req, res, next) => {
  try {
    let rawMPo = await rawMpurchaseOrderModel.create(req.body);
    res.status(200).send(rawMPo);
  } catch (error) {
    console.log(error);
  }
};

exports.getRawMPO = async (req, res, next) => {
  try {
    let rawMPo = await rawMpurchaseOrderModel
      .find({})
      .populate(["vendor", "widthMM", "thickMM"]);
    res.status(200).send(rawMPo);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteRawMPO = async (req, res, next) => {
  try {
    const deletePO = await rawMpurchaseOrderModel.findByIdAndDelete(
      req.params.id
    );
    if (deletePO == null) {
      res.status(400).send("Not Deleted");
    } else {
      res.status(200).send("Delete Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateRawMPO = async (req, res, next) => {
  try {
    if (req.files) {
      let img = req.files[0];
      req.body.photo = img?.location;
    }

    const updatedPO = await rawMpurchaseOrderModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (updatedPO == null) {
      res.status(400).send("Not updated");
    } else {
      res.status(200).send("updated Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
