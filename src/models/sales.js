const connection = require('./connection');

async function insertSaleDate() {
  try {
    const [result] = await connection.execute(
      'INSERT INTO sales (date) VALUES (NOW())',
    );
    return result.insertId;
  } catch (error) {
    throw new Error(error);
  }
}

async function createSale(sale) {
  try {
    const [result] = await connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [sale.saleId, sale.productId, sale.quantity],
    );
    return result.insertId;
  } catch (error) {
    throw new Error(error);
  }
}

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT
      s.id AS saleId,
      s.date AS date,
      sl.product_id AS productId, 
      sl.quantity AS quantity
    FROM sales AS s
    JOIN sales_products AS sl ON s.id = sl.sale_id
    ORDER BY saleId ASC, productId ASC;`,
  );
  return result;
};

const getSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT
      s.date AS date,
      sl.product_id AS productId, 
      sl.quantity AS quantity
    FROM sales AS s
    JOIN sales_products AS sl ON s.id = sl.sale_id
    WHERE s.id = ?;`,
    [id],
  );
  return result.length > 0 ? result : null;
};

module.exports = {
  createSale,
  insertSaleDate,
  getAllSales,
  getSaleById,
};
