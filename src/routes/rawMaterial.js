const express = require("express");
const rawMaterial = require("../controller/rawMaterial");
const rawMpurchaseOrderController = require("../controller/rawMpurchaseOrderController");
const { multerUploadS3 } = require("../utils/multer");

const Router = express.Router();

Router.post("/widthMM", rawMaterial.AddWidthMM);
Router.get("/widthMM", rawMaterial.getWidthMM);

Router.post("/thickMM", rawMaterial.AddThickMM);
Router.get("/thickMM/:id", rawMaterial.getThickMM);

Router.post("/po", rawMpurchaseOrderController.createRawMPO);
Router.get("/po", rawMpurchaseOrderController.getRawMPO);
Router.delete("/po/:id", rawMpurchaseOrderController.deleteRawMPO);

Router.patch(
  "/po/:id",
  multerUploadS3.any(),
  rawMpurchaseOrderController.updateRawMPO
);

module.exports = Router;

module.exports = Router;
