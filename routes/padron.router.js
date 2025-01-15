
const express = require('express');
const router = express.Router();
const Evento = require('../models/evento.model');
const {authMiddleware} = require('../middleware/auth.middleware');
const Padron = require('../models/padron.model');

// Obtener todos los patinadores registrados (authMiddleware)
router.get('/', async (req, res) => {
  try {
    const padron = await Padron.findAll();
    res.json(padron);
  } catch (error) {
    res.status(500).json({ error: 'No se encuentra el DNI en la base de datos!' });
  }
});
// Obtener todos los patinadores registrados (authMiddleware)
router.get('/:dni', async (req, res) => {
  try {
    const { dni } = req.params;
    const padron = await Padron.findOne({
      where: {
          documentoN: dni
      }
    });
    res.json(padron);
  } catch (error) {
    res.status(500).json({ error: 'No se encuentra el DNI en la base de datos!' });
  }
});

// Crear un nuevo registro de deportista
router.post('/', async (req, res) => {
  try {
    const { 
        licNacionalNumero, documentoN, apellidoYNombre, fechadeNacimiento, sexo, 
        nacionalidad, club, categoria, funcion, domicilio, cP, localidad,
        provincia, telefono, tipoLicencia, federeada
    } = req.body;
    const nuevoDeportista = await Padron.create({ 
        licNacionalNumero, documentoN, apellidoYNombre, fechadeNacimiento, sexo, 
        nacionalidad, club, categoria, funcion, domicilio, cP, localidad,
        provincia, telefono, tipoLicencia, federeada });
    res.status(201).json(nuevoDeportista);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el deportista' });
  }
});

/**
 * Massive insert for padron model
 */
// Crear un nuevo registro de deportista
router.post('/massive-insert', async (req, res) => {
  try {
    /*const { 
        licNacionalNumero, documentoN, apellidoYNombre, fechadeNacimiento, sexo, 
        nacionalidad, club, categoria, funcion, domicilio, cP, localidad,
        provincia, telefono, tipoLicencia, federeada
    } = req.body;*/

    const fullPadron = req.body;
    fullPadron.forEach(async (p)=>{
       const { 
        licNacionalNumero, documentoN, apellidoYNombre, fechadeNacimiento, sexo, 
        nacionalidad, club, categoria, funcion, domicilio, cP, localidad,
        provincia, telefono, tipoLicencia, federeada
      } =p;
      const nuevoDeportista = await Padron.create({ 
        licNacionalNumero, documentoN, apellidoYNombre, fechadeNacimiento, sexo, 
        nacionalidad, club, categoria, funcion, domicilio, cP, localidad,
        provincia, telefono, tipoLicencia, federeada });
    })
   
        const finalize = {"success": true};
    res.status(201).json(finalize);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el deportista' });
  }
});

  

module.exports = router;