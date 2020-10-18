const express = require('express')
const router = express.Router();

const { verifyToken } = require('../middleware/verifyToken');

// Import controller
const restaurantController = require('../controllers/restaurant');

// restaurants/...
router.get('/', verifyToken, restaurantController.getAllRestaurants);
router.get('/:restaurantId', verifyToken, restaurantController.getOneRestaurant);
router.get('/:restaurantId/menus', verifyToken, restaurantController.getAllMenus);
router.get('/:restaurantId/menus/:menuId', verifyToken, restaurantController.getOneMenu);
// router.post('/:restaurantId/menus/:menuId/action', verifyToken, restaurantController.postAction);

module.exports = router;