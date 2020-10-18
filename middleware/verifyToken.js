const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Verify token
exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        let token = authHeader && authHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET, (err, result) => {
            // console.log('Result: ', result);
            return User.findByPk(result._id);
        })
        .then(user => {
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
};