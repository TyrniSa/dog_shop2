const pool = require('../../db');
const queries = require('../queries/orderQueries');

//get all orders
const getOrders = (req, res) => {
  pool.query(queries.getOrders, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//get one order by matching id
const getOrderById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getOrderById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getOrders,
  getOrderById,
};