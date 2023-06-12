const { Router } = require('express');
const productsController = require('../controllers/products');
const validateName = require('../middlewares/validateName');
const validateUpdate = require('../middlewares/validateUpdate');

const productsRouter = Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', productsController.getProductId);
productsRouter.post('/', validateName, productsController.createProduct);
productsRouter.put(
  '/:id',
  validateName,
  validateUpdate,
  productsController.updateProduct,
);
productsRouter.delete('/:id', validateUpdate, productsController.deleteProduct);

module.exports = productsRouter;
