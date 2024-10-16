const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Registrar un nuevo usuario
router.post('/', async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  try {
    // Comprobar si el usuario ya existe
    let usuario = await Usuario.findOne({ where: { email } });
    if (usuario) {
      return res.status(400).json({ error: 'El usuario ya está registrado' });
    }

    // Crear nuevo usuario
    usuario = await Usuario.create({ nombre, email, password, rol });

    // Crear y devolver token JWT
    const payload = { id: usuario.id, rol: usuario.rol };
    const token = jwt.sign(payload, 'secret_key', { expiresIn: '1h' });  // Usa una secret_key segura

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});






module.exports = router;
