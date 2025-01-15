const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Patinador = require('./patinador.model');

const Evento = sequelize.define('Evento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Evento.associate = function(models) {

  Evento.belongsToMany(models.Patinador, { through: 'PatinadorEvento' });

};


module.exports = Evento;
