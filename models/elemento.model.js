const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Evento = require('./evento.model');
const Patinador = require('./patinador.model');

const Elemento = sequelize.define('Elemento', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  
// Relación muchos a muchos con Eventos
Patinador.belongsToMany(Evento, { through: 'PatinadorEvento' });
Evento.belongsToMany(Patinador, { through: 'PatinadorEvento' });


module.exports = Elemento;

