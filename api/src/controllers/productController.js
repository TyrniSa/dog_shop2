const pool = require('../../db');
const queries = require('../queries/productQueries');

//get all products
const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//get one product with a matching id
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//post product
const addProduct = (req, res) => {
  const { name, price, description, sex, age, img } = req.body;
  //add product to db
  pool.query(queries.addProduct, [name, price, description, sex, age, img], (error, results) => {
    if (error) throw error;

    res.status(201).send('Product created');
  });
};

//delete product
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getProductById, [id], (error, results) => {
    const noProduct = !results.rows.length;
    if (noProduct) {
      res.send("No product found with this id, could not remove product");
    } else {
      pool.query(queries.deleteProduct, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Product removed');
      });
    }
  });
};

//put product
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price, description, sex, age, img } = req.body;

  pool.query(queries.getProductById, [id], (error, results) => {
    const noProduct = !results.rows.length;
    if (noProduct) {
      res.send("No product found with this id, could not update product");
    } else {
      pool.query(queries.updateProduct, [name, price, description, sex, age, img, id], (error, results) => {
        if (error) throw error;
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