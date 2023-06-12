const productsModel = require('../models/products');

const getAllProducts = async () => productsModel.getAllProducts();

const getProductId = async (id) => productsModel.getProductId(id);

const createProduct = async (name) => productsModel.createProduct(name);

const updateProduct = async (name, id) => productsModel.updateProduct(name, id);

const deleteProduct = async (id) => productsModel.deleteProduct(id);

module.exports = {
  getAllProducts,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
