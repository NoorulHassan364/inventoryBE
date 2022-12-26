const stagesModel = require("../modals/stagesModel");
const machineModal = require("../modals/productionMachines");
const rawMPOModel = require("../modals/rawMpurchaseOrderModel");
const requestedRawModal = require("../modals/requestedRawM");
const onGoingReportModal = require("../modals/onGoingReport");
const productionWeightModal = require("../modals/productionWeight");
const prodAndScrapModal = require("../modals/productionAndScrap");

exports.addProductionStage = async (req, res, next) => {
  try {
    const stage = await stagesModel.create(req.body);
    res.status(201).send(stage);
  } catch (error) {
    console.log(error);
  }
};

exports.getStages = async (req, res, next) => {
  try {
    let stages = await stagesModel.find({});
    res.status(200).send(stages);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteStage = async (req, res, next) => {
  try {
    const removeStage = await stagesModel.findByIdAndDelete(req.params.id);
    if (removeStage == null) {
      res.status(400).send("Stage not Deleted");
    } else {
      res.status(200).send("Stage Delete Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateStage = async (req, res, next) => {
  try {
    const upgradeClient = await stagesModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (upgradeClient == null) {
      res.status(400).send("Stage not Updated");
    } else {
      res.status(200).send(upgradeClient);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.addProductionMachine = async (req, res, next) => {
  try {
    let uniqueId = (Math.random() + 1).toString(36).substring(7);
    req.body.uniqueId = uniqueId;
    const machine = await machineModal.create(req.body);
    res.status(201).send(machine);
  } catch (error) {
    console.log(error);
  }
};

exports.getMachines = async (req, res, next) => {
  try {
    let machines = await machineModal.find({}).populate([{ path: "stage" }]);
    res.status(200).send(machines);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMachine = async (req, res, next) => {
  try {
    let machines = await machineModal.findByIdAndDelete(req.params.id);
    if (machines == null) {
      res.status(400).send("MACHINE not Deleted");
    } else {
      res.status(200).send("MACHINE Delete Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateMachine = async (req, res, next) => {
  try {
    const upgradeMachine = await machineModal
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .populate([{ path: "stage" }]);
    if (upgradeMachine == null) {
      res.status(400).send("machine not Updated");
    } else {
      res.status(200).send(upgradeMachine);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.requestRawM = async (req, res, next) => {
  try {
    req.body?.data?.map(async (el) => {
      await rawMPOModel.findByIdAndUpdate(el?.rowId, {
        weightQtn: el?.remainingQTN,
      });
      await requestedRawModal.create({
        widthMM: el?.widthMM,
        thickMM: el?.thickMM,
        weightQtn: el?.value,
      });
    });

    res.status(200).json({ message: "sucess" });
  } catch (error) {
    console.log(error);
  }
};

exports.getRequestedRawM = async (req, res, next) => {
  try {
    let allRM = await requestedRawModal.find({});
    res.status(200).send(allRM);
  } catch (error) {
    console.log(error);
  }
};

// ongoing report
exports.onGoingReport = async (req, res, next) => {
  try {
    if (req.files) {
      req.body.photo = req.files[0].location;
    }
    await onGoingReportModal.create(req.body);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};

exports.getOnGoingReport = async (req, res, next) => {
  try {
    let allRM2 = await onGoingReportModal
      .find({})
      .populate([{ path: "machine" }]);
    console.log("allRM2", allRM2);
    res.status(200).send(allRM2);
  } catch (error) {
    console.log(error);
  }
};

//production weight

exports.productionWeight = async (req, res, next) => {
  try {
    await productionWeightModal.create(req.body);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};

exports.getProductionWeight = async (req, res, next) => {
  try {
    let allRM3 = await productionWeightModal.find({});
    res.status(200).send(allRM3);
  } catch (error) {
    console.log(error);
  }
};

//production and scrap
exports.prodAndScrap = async (req, res, next) => {
  try {
    await prodAndScrapModal.create(req.body);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
};

exports.getProdAndScrap = async (req, res, next) => {
  try {
    let allRM4 = await prodAndScrapModal.find({});
    res.status(200).send(allRM4);
  } catch (error) {
    console.log(error);
  }
};
