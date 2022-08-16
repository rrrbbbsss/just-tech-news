const Sequelize = require('sequelize');

require('dotenv').config();
DB_NAME = process.env.DB_NAME;
DB_USER = process.env.DB_USER;
DB_PASS = process.env.DB_PASS;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports =sequelize;