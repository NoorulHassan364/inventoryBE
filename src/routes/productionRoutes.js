const express = require("express");
const productionController = require("../controller/productionController");
const { multerUploadS3 } = require("../utils/multer");
const Router = express.Router();

//stage
Router.post("/stage", productionController.addProductionStage);
Router.get("/stage", productionController.getStages);
Router.delete("/stage/:id", productionController.deleteStage);
Router.patch("/stage/:id", productionController.updateStage);

//machine
Router.post("/machine", productionController.addProductionMachine);
Router.get("/machine", productionController.getMachines);
Router.delete("/machine/:id", productionController.deleteMachine);
Router.patch("/machine/:id", productionController.updateMachine);

//request token
Router.post("/requestToken", productionController.requestRawM);
Router.get("/requestToken", productionController.getRequestedRawM);

//OnGoing REPORT
Router.post(
  "/onGoingReport",
  multerUploadS3.any(),
  productionController.onGoingReport
);
Router.get("/onGoingReport", productionController.getOnGoingReport);

//production weight
Router.post("/productionWeight", productionController.productionWeight);
Router.get("/productionWeight", productionController.getProductionWeight);

//production and Scrap
Router.post("/prodAndScrap", productionController.prodAndScrap);
Router.get("/prodAndScrap", productionController.getProdAndScrap);

module.exports = Router;
