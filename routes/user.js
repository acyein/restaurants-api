const express = require('express')
const router = express.Router();

// Import validations
const { registerValidation, loginValidation } = require('../models/validation');

// Import controller
const userController = require('../controllers/user');

router.post('/register', registerValidation, userController.registerUser);

router.post('/login', loginValidation, userController.loginUser);

module.exports = router;