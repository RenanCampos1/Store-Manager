const productModel = require('../models/products');

const validateQuantity = async (req, res, next) => {
  const sales = req.body;

  const invalidQuantity = sales.some((sale) => sale.quantity < 1);
  const quantityUndefined = sales.some((sale) => sale.quantity === undefined);

  if (invalidQuantity) {
    return res
      .status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (quantityUndefined) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  return next();
};

const validateProduct = async (req, res, next) => {
  const sales = req.body;
  const productIdUndefined = sales.some((sale) => sale.productId === undefined);

  if (productIdUndefined) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  const productsByIds = await Promise.all(
    sales.map(({ productId }) => productModel.getProductId(productId)),
  );
  const productNotFound = productsByIds.some((prod) => prod === undefined);

  if (productNotFound) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return next();
};

module.exports = {
  validateQuantity,
  validateProduct,
};
