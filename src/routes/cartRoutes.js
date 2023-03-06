const { Router } = require('express');
const controller = require('../controllers/cartController');

const router = Router();

router.get('/:id', controller.getCartByCartid);
router.get('/user/:id', controller.getCartByUserid);
router.post('/', controller.addCart);
router.delete('/:id', controller.deleteCart);
router.post('/:id', controller.addProductToCart);
router.put('/:cartid/:id', controller.editProductQtyInCart);
router.delete('/:cartid/:id', controller.deleteProductFromCart);
router.post('/checkout/:id', controller.checkout);

module.exports = router;