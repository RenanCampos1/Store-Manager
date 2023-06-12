const salesModel = require('../models/sales');

const createSale = async (sales) => {
  const newSaleId = await salesModel.insertSaleDate();
  await Promise.all(
    sales.map(async (sale) =>
      salesModel.createSale({
        saleId: newSaleId,
        productId: sale.productId,
        quantity: sale.quantity,
      })),
  );
  const response = {
    id: newSaleId,
    itemsSold: [...sales],
  };
  return { type: null, message: response };
};

const getAllSales = async () => salesModel.getAllSales();

const getSaleById = async (id) => salesModel.getSaleById(id);

module.exports = {
  createSale,
  getAllSales,
  getSaleById,
};
