const patinadoresRoutes = require('./routes/patinadores.router');
const eventosRoutes = require('./routes/eventos.router');
const sequelize = require('./config/database');
const Patinador = require('./models/patinador.model');
const Evento = require('./models/evento.model');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


/**
 * DB
 */
sequelize.sync({ force: true }).then(() => {
    console.log('Base de datos sincronizada con las relaciones');
  });
  

/**
 * endpoints
 */
app.use('/patinadores', patinadoresRoutes);
app.use('/eventos', eventosRoutes);


app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Patinadores Artísticos');
});



/**
 * start
 */
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});