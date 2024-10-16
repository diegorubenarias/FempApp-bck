const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fempatin', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
