const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Padron = sequelize.define('Padron', {
    licNacionalNumero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documentoN: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidoYNombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechadeNacimiento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nacionalidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    club: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    funcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    domicilio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cP: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    localidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipoLicencia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    federeada: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  



module.exports = Padron;

