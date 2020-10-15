const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Action = sequelize.define('action', {
    actionBy: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    thumbsUp: {
        type: DataTypes.BOOLEAN
    }
});

module.exports = Action;