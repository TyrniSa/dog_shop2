const { Router } = require('express');
const controller = require('./productController');

const router = Router();

router.get('/', controller.getProducts);
router.post('/', controller.addProduct);
router.get('/:id', controller.getProductById);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;