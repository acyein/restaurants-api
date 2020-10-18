# About
A Node.js restaurants API displaying a list of 10 restaurants, each having 5 menus. Users must sign up and log in to view the restaurants list and can like or dislike a menu.

# Dependencies
- express 
- mysql2 (SQL database)
- sequelize (ORM for MySQL)
- express-validator (validates data passed into API)
- bcrypt (hashes and verifies password)
- jsonwebtoken (generates and sign tokens)
- dotenv (loads environment variables from .env file into process.env)

# Routes
## User
| Request | URL                  | Description                               | Header / Body Input                              |
|---------|----------------------|-------------------------------------------|--------------------------------------------------|
| POST    | /register            | Lets user register                        | username <br>email <br> password |
| POST    | /login               | Lets user login                           | email <br> password                              |

## Restaurant
| Request | URL                                             | Description                                  |
|-------|-------------------------------------------------|----------------------------------------------|
| GET   | /restaurants                                    | Displays 10 restaurants                      |
| GET   | /restaurants/:restaurantId                      | Displays more info about selected restaurant |
| GET   | /restaurants/:restaurantId/menus                | Displays 5 menu items of selected restaurant |
| GET   | /restaurants/:restaurantId/menus/:menuId        | Displays more info about selected menu item  |
| POST  | /restaurants/:restaurantId/menus/:menuId/action | User likes or dislikes menu item             |