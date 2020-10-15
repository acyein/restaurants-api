const express = require('express');

const sequelize = require('./util/database');
const User = require('./models/user');
const Restaurant = require('./models/restaurant');
const Menu = require('./models/menu');
const Action = require('./models/action');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoute = require('./routes/user');
const restaurantRoute = require('./routes/restaurant');

app.use('/', userRoute);
app.use('/restaurants', restaurantRoute);

// DB associations
Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);
Action.belongsTo(Menu);
Action.belongsTo(User);
Menu.hasMany(Action)
User.hasMany(Action)

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