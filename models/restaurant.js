const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Restaurant = sequelize.define('restaurant', {
    restaurant_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    restaurant_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
    },
    contact: {
        type: DataTypes.STRING
    }
});

module.exports = Restaurant;