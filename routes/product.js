const ctrlWrapper = require("../helpers/ctrlWrapper");
const express = require("express");
const router = express.Router();

const {
  productList,
 
  } = require("../controller/products/productController");

router.get("/productList", ctrlWrapper(productList));


module.exports = router;
