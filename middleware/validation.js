const { body, validationResult } = require('express-validator');

exports.registerValidation = [
    // Validate incoming data
    body('username')
        .not()
        .isEmpty()
        .withMessage('Username cannot be empty'),
    body('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Email must be a valid email'),
    body('password')
        .not()
        .isEmpty()
        .isLength({ min: 8 })
        .withMessage('Password should be at least 8 characters long'),
    (req, res, next) => {
        // If there are validation errors
        const result = validationResult(req.body);
        const hasErrors = !result.isEmpty();
        if (hasErrors)
            return res.status(400).json({errors: result.array()});
        next();
    },
];

exports.loginValidation = [
    // Validate incoming data
    body('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Email must be a valid email'),
    body('password')
        .not()
        .isEmpty()
        .isLength({ min: 8 })
        .withMessage('Password should be at least 8 characters long'),
    (req, res, next) => {
        // If there are validation errors
        const result = validationResult(req.body);
        const hasErrors = !result.isEmpty();
        if (hasErrors)
          return res.status(400).json({errors: result.array()});
        next();
    },
];