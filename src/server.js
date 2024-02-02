const express = require("express");
const debug = require("debug")("app:server");
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const Scale = require("../src/models/Scale")

Scale.sync()
// DATABASE
const sequelize = require("../src/db");

// CHECK DB CONNECTION
sequelize
  .authenticate()
  .then((res) => debug('Database is Conencted!'))
  .catch((err) => {
    debug(
     `Error connecting to database: ${err}`
    );
    // THIS WILL TERMINATE SERVER
    process.exit(1);
  })

// ROUTES
const routes = require("../src/routes/index");

const app = express();
app.use(cors()); //allows for cross-origin resource sharing

if ((process.env.MODE = 'development')) {
  app.use(morgan('dev'));
}

dotenv.config('.env');


// MAKE SURE SERVER CAN SPEAK JSON
app.use(express.json());

// ROUTES
app.use('/api', routes);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Server is up and running on PORT: ${PORT}`);
});