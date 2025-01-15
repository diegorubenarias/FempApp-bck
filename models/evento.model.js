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

// Relación muchos a muchos con Patinadores
// Evento.belongsToMany(Patinador, { through: 'PatinadorEvento' });
// Patinador.belongsToMany(Evento, { through: 'PatinadorEvento' });

module.exports = Evento;
