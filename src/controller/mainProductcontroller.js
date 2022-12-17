const ProductType = require("../modals/mainProduct");

// create Product
exports.products = async (req, res, next) => {
  try {
    const createProduct = await ProductType.create(req.body);
    res.status(201).send(createProduct);
  } catch (error) {
    console.log(error);
  }
};
// get product
exports.getProducts = async (req, res, next) => {
  try {
    const allProducts = await ProductType.find({});
    res.status(200).send(allProducts);
  } catch (error) {
    console.log(error);
  }
};
