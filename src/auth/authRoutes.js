const {Router} = require('express');
const controller = require('./authController');
const { registerValidation, loginValidation } = require('./authValidators');
const { validationMiddleware } = require('../middleware/validationsMiddleware');
const { userAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/get-users', controller.getUsers);
router.get('/protected', userAuth, controller.getProtected);
router.post('/register', registerValidation, validationMiddleware, controller.registerUser);
router.post('/login', loginValidation, validationMiddleware, controller.loginUser);
router.get('/logout', userAuth, controller.logoutUser);

module.exports = router;