const express = require('express');
const router = express.Router();
const Patinador = require('../models/patinador.model');
const Evento = require('../models/evento.model');
const {authMiddleware} = require('../middleware/auth.middleware');

// Obtener todos los patinadores (authMiddleware)
router.get('/', async (req, res) => {
  try {
    const patinadores = await Patinador.findAll();
    res.json(patinadores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los patinadores' });
  }
});

// Crear un nuevo patinador
router.post('/', async (req, res) => {
  try {
    const { nombre, edad, nivel } = req.body;
    const nuevoPatinador = await Patinador.create({ nombre, edad, nivel });
    res.status(201).json(nuevoPatinador);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el patinador' });
  }
});



// eventos
// Inscribir un patinador en un evento
router.post('/:patinadorId/eventos/:eventoId', async (req, res) => {
  try {
    const { patinadorId, eventoId } = req.params;
    const patinador = await Patinador.findByPk(patinadorId);
    const evento = await Evento.findByPk(eventoId);

    if (!patinador || !evento) {
      return res.status(404).json({ error: 'Patinador o evento no encontrado' });
    }

    await patinador.AddEvento(evento);
    res.status(200).json({ message: 'Patinador inscrito en el evento exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al inscribir el patinador en el evento' });
  }
  });

// Obtener todos los eventos a los que un patinador está inscrito
router.get('/:patinadorId/eventos', async (req, res) => {
    try {
      const { patinadorId } = req.params;
      const patinador = await Patinador.findByPk(patinadorId, {
        include: Evento
      });
  
      if (!patinador) {
        return res.status(404).json({ error: 'Patinador no encontrado' });
      }
  
      res.json(patinador.Eventos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los eventos del patinador' });
    }
  });
  

module.exports = router;
