const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = (req, res, next) => {
    // Check if user's email exists in db
    User.findOne({ where: {
        email: req.body.email
    } })
    .then(emailExists => {
        console.log(emailExists);
        if(emailExists) return res.status(400).send('Email already exists');
    })
    
    // Hash password
    bcrypt.genSalt(10)
    .then(salt => {
        bcrypt.hash(req.body.password, salt)
        .then(hashedPassword => {
            // Create new user in db
            console.log(hashedPassword);
            User
                .create({
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
                .catch(err => {
                    console.log(err);
                });
    
        })
    })
   
}

exports.loginUser = (req, res, next) => {
    // Find email in db
    // console.log(req.body.email);
    User.findOne({ 
        where: {
            email: req.body.email 
        }
    })
    .then(user => {
        console.log(user);
        // Check if password is correct
        // Compare pw from input and hashed pw from db
        const validPass = bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send('Incorrect password');
        const token = jwt.sign({ _id: user.user_id }, 'jsdlfgjdfg');
        res.json({
            message: 'Success! You are now logged in',
            info: user,
            token: token
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({
            message: 'An error occurred'
        })
    });
}