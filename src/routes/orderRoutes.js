const { Router } = require('express');
const controller = require('../controllers/orderController');

const router = Router();

router.get('/', controller.getOrders);
router.get('/:id', controller.getOrderById);

module.exports = router;