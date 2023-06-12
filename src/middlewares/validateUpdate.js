const productModel = require('../models/products');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const product = await productModel.getProductId(id);
  if (product === undefined) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};
