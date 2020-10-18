const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Action = sequelize.define('action', {
    action_by: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    thumbs_up: {
        type: DataTypes.BOOLEAN
    }
});

module.exports = Action;