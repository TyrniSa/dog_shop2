const getCartById = 'SELECT * FROM carts LEFT JOIN cartitems ON carts.id = cartitems.cartid LEFT JOIN products ON products.id = cartitems.productid WHERE cartid = $1';
const getCartByUserid = 'SELECT * FROM carts LEFT JOIN cartitems ON carts.id = cartitems.cartid LEFT JOIN products ON products.id = cartitems.productid WHERE userid = $1';
const findCart = 'SELECT * FROM carts where id = $1';
const findCartByUser = 'SELECT * FROM carts where userid = $1';
const addCart= 'INSERT INTO Carts (userid) VALUES ($1)';
const deleteCart = 'DELETE FROM carts WHERE id = $1';
const addProductToCart = 'INSERT INTO cartitems (cartid, productid, qty) VALUES ($1, $2, $3)';
const editProductQtyInCart = 'UPDATE cartitems SET qty = $1 WHERE id= $2';
const deleteProductFromCart = 'DELETE FROM cartitems WHERE id = $1';
const addOrder = 'INSERT INTO orders (total, userid) VALUES ($1, $2)';
module.exports = {
  getCartById,
  getCartByUserid,
  findCart,
  findCartByUser,
  addCart,
  deleteCart,
  addProductToCart,
  editProductQtyInCart,
  deleteProductFromCart,
  addOrder
};