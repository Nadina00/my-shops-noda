const ctrlWrapper = require("../helpers/ctrlWrapper");
const express = require("express");
const router = express.Router();
const {
    addOrder,
 } = require("../controller/order/orderController");

router.post("/add", ctrlWrapper(addOrder));



module.exports = router;