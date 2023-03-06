const pool = require('../../db');
const queries = require('../queries/cartQueries');

const getCartByCartid = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getCartById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getCartByUserid = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getCartByUserid, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addCart = (req, res) => {
  const { userid } = req.body;
  //add Cart to db
  pool.query(queries.addCart, [userid], (error, results) => {
    if (error) throw error;

    res.status(201).send('Cart created');
  });
};

const deleteCart = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.findCart, [id], (error, results) => {
    const noCart = !results.rows.length;
    if (noCart) {
      res.send("No Cart found with this id, could not remove Cart");
    } else {
      pool.query(queries.deleteCart, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Cart removed');
      });
    }
  });
};

const addProductToCart = (req, res) => {
  const cartid = parseInt(req.params.id);
  const { productid, qty } = req.body;
  //add Product to cart
  pool.query(queries.addProductToCart, [cartid, productid, qty], (error, results) => {
    if (error) throw error;

    res.status(201).send(`Product added to cart with id ${cartid}`);
  });
};

const editProductQtyInCart = (req, res) => {
  const cartid = parseInt(req.params.cartid);
  const id = parseInt(req.params.id);
  const { qty } = req.body;

  pool.query(queries.findCart, [cartid], (error, results) => {
    const noCart = !results.rows.length;
    if (noCart) {
      res.send("No cart item found with this id, could not update product quantity");
    } else {
      pool.query(queries.editProductQtyInCart, [qty, id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Product quantity Updated');
      });
    }
  });
};

const deleteProductFromCart = (req, res) => {
  const cartid = parseInt(req.params.cartid);
  const id = parseInt(req.params.id);

  pool.query(queries.findCart, [cartid], (error, results) => {
    const noCart = !results.rows.length;
    if (noCart) {
      res.send("No cart item found with this id, could not delete product from cart");
    } else {
      pool.query(queries.deleteProductFromCart, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Product deleted from cart');
      });
    }
  });
};

const checkout = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.findCart, [id], (error, results) => {
    const noCart = !results.rows.length;

    if (noCart) {
      res.send("No cart with this id, could not count total");
    } else {
      pool.query(queries.getCartById, [id], (error, results) => {
        if (error) throw error;
  
        let total = 0;
        for (let i = 0; i < results.rows.length; i++) {
          total += parseFloat(results.rows[i].price);
        }

        //move cart to orders
        const userid = parseInt(results.rows[0].userid);
        pool.query(queries.addOrder, [total, userid], (error, results) => {
          if (error) throw error;

          res.status(201).send(`New order created for userId: ${userid}, total: ${total}`);
        });
      });
    }
  });
};

// const getCartTotalByCartid = (req, res) => {
//   const id = parseInt(req.params.id);

//   pool.query(queries.findCart, [id], (error, results) => {
//     const noCart = !results.rows.length;
//     if (noCart) {
//       res.send("No cart with this id, could not count total");
//     } else {
//       pool.query(queries.getCartById, [id], (error, results) => {
//         if (error) throw error;
//         let total = 0;
//         for (let i=0; i<results.rows.length; i++){
//           total += parseFloat(results.rows[i].price);
//         }
//         console.log(total);
//         res.status(200).json({"total": total});
//       });
//     }
//   });
// };

module.exports = {
  getCartByCartid,
  getCartByUserid,
  addCart,
  deleteCart,
  addProductToCart,
  editProductQtyInCart,
  deleteProductFromCart,
  checkout
  // getCartTotalByCartid
};