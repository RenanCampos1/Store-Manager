const productsService = require('../services/products');

const INTERNAL_SERVER_ERROR_MESSAGE = 'Internal Server Error';
const PRODUCT_NOT_FOUND_MESSAGE = 'Product not found';

async function getAllProducts(req, res) {
  try {
    const products = await productsService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR_MESSAGE });
  }
}

async function getProductId(req, res) {
  try {
    const { id } = req.params;
    const product = await productsService.getProductId(id);
    if (!product) { return res.status(404).json({ message: PRODUCT_NOT_FOUND_MESSAGE }); }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR_MESSAGE });
  }
}

async function createProduct(req, res) {
  try {
    const { name } = req.body;
    const product = await productsService.createProduct({ name });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR_MESSAGE });
  }
}

async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedProduct = await productsService.updateProduct(name, id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR_MESSAGE });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    await productsService.deleteProduct(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR_MESSAGE });
  }
}

module.exports = {
  getAllProducts,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
