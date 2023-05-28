const ctrlWrapper = require("../helpers/ctrlWrapper");
const express = require("express");
const router = express.Router();
const {
  getShops,
  getShopProducts,
} = require("../controller/shops/shopController");

router.get("/", ctrlWrapper(getShops));
router.get("/:id", ctrlWrapper(getShopProducts));


module.exports = router;
