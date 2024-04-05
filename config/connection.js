const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
    'blog_db',
    'postgres',
    'will',
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );

module.exports = sequelize;