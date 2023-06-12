const { Router } = require('express');
const salesController = require('../controllers/sales');
const {
  validateQuantity,
  validateProduct,
} = require('../middlewares/validateSales');

const salesRouter = Router();

salesRouter.post(
  '/',
  validateQuantity,
  validateProduct,
  salesController.createSale,
);
salesRouter.get('/', salesController.getAllSales);
salesRouter.get('/:id', salesController.getSaleById);

module.exports = salesRouter;
