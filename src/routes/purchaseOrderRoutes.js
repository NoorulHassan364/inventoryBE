const express = require("express");
const purchaseOrder = require("../controller/purchaseOrderController");
const Router = express.Router();

Router.post("/", purchaseOrder.createClientANDPRODUCT);
Router.get("/", purchaseOrder.findClientAndProduct);
Router.delete("/:id", purchaseOrder.deleteClient);

module.exports = Router;
