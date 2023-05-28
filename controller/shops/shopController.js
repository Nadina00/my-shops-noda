const RequestError = require("../../helpers/RequstError").default;
const { Shop } = require("../../models/shop");
const { Product } = require("../../models/product");

const getShops = async (req, res, next) => {
  const shops = await Shop.find({});
  if (!shops) {
    throw RequestError(400, "Bad Request");
  }
  console.log(shops);
  res.json({
    status: "success",
    code: 200,
    shops,
  });
};

const getShopProducts = async (req, res, next) => {
  const { id } = req.params;
  const shop = await Shop.findById({ _id: id });
  if (!shop) {
    throw RequestError(400, "Bad Request");
  }
  const products = await Product.find({});
  res.json({
    status: "success",
    code: 200,
    products,
  });
};

module.exports = {
  getShops,
  getShopProducts,
};
