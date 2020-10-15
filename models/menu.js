const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Menu = sequelize.define('menu', {
    menu_item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    menu_item_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

module.exports = Menu;