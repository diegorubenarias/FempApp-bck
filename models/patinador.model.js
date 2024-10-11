const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Evento = require('./evento.model');

const Patinador = sequelize.define('Patinador', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nivel: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
// Relación muchos a muchos con Eventos
Patinador.belongsToMany(Evento, { through: 'PatinadorEvento' });
Evento.belongsToMany(Patinador, { through: 'PatinadorEvento' });

module.exports = Patinador;

