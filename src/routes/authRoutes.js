const { Router } = require('express');
const controller = require('../controllers/authController');
const { registerValidation, loginValidation } = require('../auth/authValidators');
const { validationMiddleware } = require('../middleware/validationsMiddleware');
const { userAuth } = require('../middleware/authMiddleware');

const router = Router();

router.get('/users', controller.getUsers);
router.get('/users/:id', userAuth, controller.getUserById);
router.get('/protected', userAuth, controller.getProtected);
router.put('/users/:id', userAuth, controller.updateUser);
router.delete('/users/:id', controller.deleteUser);
router.post('/register', registerValidation, validationMiddleware, controller.registerUser);
router.post('/login', loginValidation, validationMiddleware, controller.loginUser);
router.get('/logout', userAuth, controller.logoutUser);

module.exports = router;