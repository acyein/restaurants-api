const express = require('express');
const app = express();
const sequelize = require('./util/database');
const dotenv = require('dotenv');

// Import models
const User = require('./models/user');
const Restaurant = require('./models/restaurant');
const Menu = require('./models/menu');
const Action = require('./models/action');

// Import routes
const userRoute = require('./routes/user');
const restaurantRoute = require('./routes/restaurant');

dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute);
app.use('/restaurants', restaurantRoute);

// DB associations
Restaurant.hasMany(Menu, { 
    as: 'menus' 
});
Menu.belongsTo(Restaurant, { 
    as: 'restaurant',
    foreignKey: 'restaurantId'
});
Menu.hasMany(Action, {
    as: 'actions'
});
Action.belongsTo(Menu, {
    as: 'menus',
    foreignKey: 'menuId'
});
User.hasMany(Action, {
    as: 'actions'
});
Action.belongsTo(User, {
    as: 'users',
    foreignKey: 'action_by'
});

// Sync db
sequelize
    // .sync({ force: true }) // Drop table if exists
    // .sync({ alter: true }) // Update changes
    .sync()
    .then(user => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });