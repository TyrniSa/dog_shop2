const pool = require('../../db');
const queries = require('../queries/productQueries');

const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, results) =>{
    if(error) throw error;
    res.status(200).json(results.rows);
  });
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (error, results) =>{
    if(error) throw error;
    res.status(200).json(results.rows);
  });
};

const addProduct = (req, res) => {
  const { name, price, description } = req.body;
  //add product to db
  pool.query(queries.addProduct, [name, price, description], (error, results) =>{
    if(error) throw error;

    res.status(201).send('Product created');
  });
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (error, results) =>{
    const noProduct = !results.rows.length;
    if(noProduct){
      res.send("No product found with this id, could not remove product");
    } else {
    pool.query(queries.deleteProduct, [id], (error,results) => {
      if(error) throw error;
      res.status(200).send('Product removed');
    });
  }
  });
};

const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, description } = req.body;

  pool.query(queries.getProductById, [id], (error, results) =>{
    const noProduct = !results.rows.length;
    if(noProduct){
      res.send("No product found with this id, could not update product");
    } else {
    pool.query(queries.updateProduct, [name, price, description, id], (error,results) => {
      if(error) throw error;
      res.status(200).send('Product Updated');
    });
  }
  });
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct
};