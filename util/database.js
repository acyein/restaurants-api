const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize(
    'restaurant', // schema name
    'root', // db username
    '', // db password
    {
        dialect: 'mysql',
        dialectOptions: {
            supportBigNumbers: true
        },
        host: '127.0.0.1',
        post: '3306'
    }
);

module.exports = sequelize;