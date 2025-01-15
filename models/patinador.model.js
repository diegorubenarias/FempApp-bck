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
  


Patinador.belongsToMany(Evento, { through: 'PatinadorEventos' });

// Function to associate an existing event with a patinador
Patinador.prototype.addExistingEvento = async function(eventoId) {
  const evento = await Evento.findByPk(eventoId);
  if (evento) {
    await this.addEvento(evento);
  } else {
    throw new Error('Evento not found');
  }
};



module.exports = Patinador;

