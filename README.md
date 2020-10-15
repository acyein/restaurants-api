# About
A Node.js restaurants API displaying a list of 10 restaurants, each having 5 menus. Users must sign up and log in to view the restaurants list and can like or dislike a menu.

# Dependencies
- express 
- mysql2 (SQL database)
- sequelize (ORM for MySQL)

# Routes
# About
A Node.js authentication API that allows myself to register, login, see my profile and another user's profile, while blocking that other user from seeing my profile

# Dependencies
- express
- mongoose (connects to your MongoDB database)
- bcrypt (hashes password)
- jsonwebtoken (verifies and generates tokens)
- @hapi/joi (validates data passed into API)
- dotenv (loads environment variables from .env file into process.env)

# Routes
## Users
| Methods | URL                  | Description                               | Header / Body Input                              |
|---------|----------------------|-------------------------------------------|--------------------------------------------------|
| POST    | /register            | Lets user register                        | firstName  <br>lastName  <br>email  <br>password |
| POST    | /login               | Lets user login                           | email  <br>password                              |
| GET     | /users/:userId       | Displays user's profile                   | auth-token                                       |
| POST    | /users/:userId/block | Blocks anyone from viewing user's profile |                                                  |

## Restaurants
| Verb | URL                                             | Description                                  |
|------|-------------------------------------------------|----------------------------------------------|
| GET  | /restaurants                                    | Displays 10 restaurants                      |
| GET  | /restaurants/:restaurantId                      | Displays more info about selected restaurant |
| GET  | /restaurants/:restaurantId/menus                | Displays 5 menu items of selected restaurant |
| GET  | /restaurants/:restaurantId/menus/:menuId        | Displays more info about selected menu item  |
| GET  | /restaurants/:restaurantId/menus/:menuId/action | User likes or dislikes menu item             |

# Credits
Followed Dev Ed's [tutorial](https://youtu.be/2jqok-WgelI), 'Build A Node.js API Authentication With JWT Tutorial'