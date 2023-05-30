const RequestError = require("../../helpers/RequstError").default;
const { Shop } = require("../../models/shop");
const { Order } = require("../../models/order");

const addOrder = async (req, res, next) => {
  const { products, user } = req.body;
  const order = await Order.create({ products, user });

  res.json({
    status: "success",
    code: 200,
    order,
  });
};

module.exports = {
  addOrder,
};
