const Restaurant = require('../models/restaurant');
const Menu = require('../models/menu');
const Action = require('../models/action');

exports.getAllRestaurants = (req, res, next) => {
    // Find all restaurants in db
    Restaurant.findAll({ raw: true }) // raw: true to get actual data instead of object instance
    .then(restaurants => {
        // console.log(restaurants);
        res.send(restaurants);
    })
    .catch(err => {
        res.status(400).json({
            message: err.message || 'An error occurred while retrieving restaurants'
        });
    });
};

exports.getOneRestaurant = (req, res, next) => {
    // Find specific restaurant in db
    const restaurantId = req.params.restaurantId;
    Restaurant.findByPk(restaurantId)
    .then(foundRestaurant => {
        console.log(foundRestaurant);
        res.json(foundRestaurant);
    })
    .catch(err => {
        res.status(400).json({
            message: err.message || 'An error occurred while retrieving the restaurant'
        });
    });
};

exports.getAllMenus = (req, res, next) => {
    const restaurantId = req.params.restaurantId;
    Restaurant.findByPk(restaurantId, {raw: true})
    .then(foundRestaurant => {
        console.log(foundRestaurant);
        Menu.findAll({ 
            where: { 
                restaurantRestaurantId: foundRestaurant.restaurant_id
            },
            raw: true
        })
        .then(menus => {
            console.log(menus);
        })
    })
    .catch(err => {
        res.status(400).json({
            message: err.message || 'An error occurred while retrieving menus from the restaurant'
        });
    });
};

exports.postAction = (req, res, next) => {
    
};