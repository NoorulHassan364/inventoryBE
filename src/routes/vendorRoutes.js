const express = require("express");
const vendorController = require("../controller/vendorController");
const Router = express.Router();

Router.post("/", vendorController.addVendor);
Router.get("/", vendorController.getVendor);

Router.delete("/:id", vendorController.deleteVendor);
Router.patch("/:id", vendorController.updateVendor);
module.exports = Router;
