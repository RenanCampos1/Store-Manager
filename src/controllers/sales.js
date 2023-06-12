const salesServices = require('../services/sales');

const createSale = async (req, res) => {
  try {
    const sale = req.body;
    const result = await salesServices.createSale(sale);

    if (result) {
      res.status(201).json(result.message);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getAllSales = async (_req, res) => {
  const allSales = await salesServices.getAllSales();
  res.json(allSales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const result = await salesServices.getSaleById(id);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: 'Sale not found' });
  }
};

module.exports = {
  createSale,
  getAllSales,
  getSaleById,
};
