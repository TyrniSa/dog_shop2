const getProducts = 'SELECT * FROM products';
const getProductById = 'SELECT * FROM products WHERE id = $1';
const addProduct = 'INSERT INTO products (name, price, description, sex, age, img) VALUES ($1, $2, $3, $4, $5, $6)';
const deleteProduct = 'DELETE FROM products WHERE id = $1';
const updateProduct = 'UPDATE products SET name = $1, price = $2, description = $3, sex = $4, age = $5, img = $6 WHERE id = $7';

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct
};