const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (user) {
                return res.status(400).send('Email already exists');
            }
            bcrypt.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                    if (err) throw err;
                    User.create({
                            username: req.body.username,
                            email: req.body.email,
                            password: hashedPassword
                        })
                        .then(savedUser => {
                            res.json({
                                message: 'Success! You are now registered',
                                userInfo: savedUser
                            });
                        })
                })
            })
        })
        .catch(err => res.status(400).send(err));
};

exports.loginUser = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (!user) {
                return res.status(400).send('User does not exist');
            }
            bcrypt.compare(req.body.password, user.password, (err, data) => {
                if (err) throw err;
                if (data) {
                    const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
                    return res.status(200).json({
                        message: 'Success! You are now logged in',
                        info: user,
                        token: token
                    })
                } else {
                    res.status(401).send('Incorrect password');
                }
            });
        })
        .catch(err => res.status(400).send(err));
};