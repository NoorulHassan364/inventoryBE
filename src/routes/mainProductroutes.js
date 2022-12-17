const express = require("express");
const ProductType = require("../controller/mainProductcontroller");

const Router = express.Router();

Router.post("/", ProductType.products);
Router.get("/", ProductType.getProducts);

module.exports = Router;
