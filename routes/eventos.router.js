const express = require('express');
const router = express.Router();
const Evento = require('../models/evento.model');

// Obtener todos los eventos
router.get('/', async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los eventos' });
  }
});

// Crear un nuevo evento
router.post('/', async (req, res) => {
  try {
    const { nombre, fecha, lugar } = req.body;
    const nuevoEvento = await Evento.create({ nombre, fecha, lugar });
    res.status(201).json(nuevoEvento);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el evento' });
  }
});

// Obtener todos los patinadores inscritos en un evento
router.get('/:eventoId/patinadores', async (req, res) => {
    try {
      const { eventoId } = req.params;
      const evento = await Evento.findByPk(eventoId, {
        include: Patinador
      });
  
      if (!evento) {
        return res.status(404).json({ error: 'Evento no encontrado' });
      }
  
      res.json(evento.Patinadors); // Sequelize devuelve el array como 'Patinadors'
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los patinadores del evento' });
    }
  });
  

module.exports = router;
