const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fempapp', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
