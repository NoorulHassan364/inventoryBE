const express = require("express");
const Points_item = require("../controller/pointAnditem");

const Router = express.Router();

Router.post("/", Points_item.pointAnditem);
Router.get("/:id", Points_item.getItemname);
Router.get("/items/all", Points_item.getAllItems);
Router.get("/name/all", Points_item.getAllPoints);

Router.get("/itempoints/:id", Points_item.getPoints);

module.exports = Router;
