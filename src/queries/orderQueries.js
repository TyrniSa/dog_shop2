const getOrders = 'SELECT * FROM Orders';
const getOrderById = 'SELECT * FROM Orders WHERE id = $1';

module.exports = {
  getOrders,
  getOrderById,
};