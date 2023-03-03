const getProducts = 'SELECT * FROM products';
const getProductById = 'SELECT * FROM products WHERE id = $1';
const addProduct= 'INSERT INTO products (name, price, description) VALUES ($1, $2, $3)';
const deleteProduct = 'DELETE FROM products WHERE id = $1';
const updateProduct = 'UPDATE products SET name = $1, price =$2, description = $3 WHERE id = $4';

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct
};