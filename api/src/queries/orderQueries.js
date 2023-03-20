const getOrders = 'SELECT * FROM Orders';
const getOrderById = 'SELECT * FROM Orders WHERE id = $1';
const getOrderByUser = 'SELECT * FROM Orders WHERE userid = $1';
const addOrder = 'INSERT INTO orders (total, userid) VALUES ($1, $2)';

module.exports = {
  getOrders,
  getOrderById,
  getOrderByUser,
  addOrder
};