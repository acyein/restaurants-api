const express = require('express')
const router = express.Router();

// Import controller
const restaurantController = require('../controllers/restaurant');

// restaurants/...
router.get('/', restaurantController.getAllRestaurants);
router.get('/:restaurantId', restaurantController.getOneRestaurant);
router.get('/:restaurantId/menus', restaurantController.getAllMenus);
// router.get('/:restaurantId/menus/:menuId', restaurantController.getOneMenu);
// router.post('/:restaurantId/menus/:menuId/action', restaurantController.postAction);

module.exports = router;