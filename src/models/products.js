const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products');
  return result;
};

const getProductId = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return result;
};

const createProduct = async ({ name }) => {
  const [result] = await connection.execute(
    'INSERT INTO products(name) VALUES(?)',
    [name],
  );
  return { id: result.insertId, name };
};

const updateProduct = async (name, id) => {
  await connection.execute('UPDATE products SET name = ? WHERE id = ?;', [
    name,
    id,
  ]);
  return { id, name };
};

const deleteProduct = async (id) => {
  await connection.execute('DELETE FROM products WHERE id = ?', [id]);
  return { id };
};

module.exports = {
  getAllProducts,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
};
