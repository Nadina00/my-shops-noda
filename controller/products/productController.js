const { Product } = require("../../models/product");
const RequestError = require("../../helpers/RequstError").default;


const productList = async (req, res, next) => {
  const result = await Product.find({});
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    status: "success",
    code: 200,
    result,
  });
};

module.exports = {
  productList,
   
};
