const getProducts = 'SELECT * FROM products';
const getProductById = 'SELECT * FROM products WHERE id = $1';
const addProduct = 'INSERT INTO products (name, price, description, sex, age) VALUES ($1, $2, $3, $4, $5)';
const deleteProduct = 'DELETE FROM products WHERE id = $1';
const updateProduct = 'UPDATE products SET name = $1, price = $2, description = $3, sex = $4, age = $5 WHERE id = $6';

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct
};