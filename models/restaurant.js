const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Restaurant = sequelize.define('restaurant', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
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