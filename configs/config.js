const Sequelize = require('sequelize');
require('dotenv').config();

const database = process.env.POSTGRES_DB;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;

var db = new Sequelize(database, username, password, {
    host: 'localhost' || process.env.DB_HOST,
    dialect: 'postgres',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});



module.exports = db