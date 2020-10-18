const { response } = require('express');
const jwt = require('jsonwebtoken');
const Restaurant = require('../models/restaurant');
const Menu = require('../models/menu');
const Action = require('../models/action');
const User = require('../models/user');

function generateAccessToken(userId) {
    return jwt.sign(userId, process.env.TOKEN_SECRET);
};

exports.getAllRestaurants = (req, res, next) => {
    Restaurant
        // .findAll({ raw: true }) // raw: true to get actual data instead of object instance
        .findAll()
        .then(restaurants => {
            const token = generateAccessToken({ _id: user.id });
            res.json({
                restaurants: restaurants
            })
        })
        .catch(err => res.status(400).send(err));
};

exports.getOneRestaurant = (req, res, next) => {
    const restaurantId = req.params.restaurantId;
    Restaurant
        .findByPk(restaurantId)
        .then(foundRestaurant => {
            res.json({
                restaurant: foundRestaurant
            });
        })
        .catch(err => res.status(400).send(err));
};

exports.getAllMenus = (req, res, next) => {
    const restaurantId = req.params.restaurantId;
    Restaurant
        .findByPk(restaurantId, { include: 'menus' })
        .then(foundRestaurant => {
            res.json({ 
                restaurant: foundRestaurant 
            });
        })
        .catch(err => res.status(400).send(err));
    };
    
exports.getOneMenu = (req, res, next) => {
    // Use restaurant name and check against menu
    const restaurantId = req.params.restaurantId;
    const menuId = req.params.menuId;
    Restaurant.findByPk(restaurantId)
        .then(foundRestaurant => {
            Menu.findByPk(menuId) // Don't need to use findByPk; find through menu and not restaurant
            .then(foundMenu => {
                // console.log(menus);
                res.json({
                    restaurant: foundRestaurant,
                    menu: foundMenu
                });
            })
        })
        .catch(err => res.status(400).send(err));
};

exports.postAction = (req, res, next) => {
    const restaurantId = req.params.restaurantId;
    const menuId = req.params.menuId;
    Restaurant
        .findByPk(restaurantId)
        .then(foundRestaurant => {
            Menu.findByPk(menuId)
            .then(foundMenu => {
                User.findOne({
                    where: { email: req.body.email }
                })
                console.log(foundMenu);
            })
        })
        .catch(err => res.status(400).send(err));
};