const Sequelize = require('sequelize');
require('dotenv').config();

const database = process.env.POSTGRES_DB;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;

var db = new Sequelize(process.env.DATABASE_URL);



module.exports = db