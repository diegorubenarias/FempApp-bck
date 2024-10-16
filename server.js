const patinadoresRoutes = require('./routes/patinadores.router');
const eventosRoutes = require('./routes/eventos.router');
const registerRoutes = require('./routes/auth.router');
const loginRoutes = require('./routes/login.router');
const sequelize = require('./config/database');
const Patinador = require('./models/patinador.model');
const Evento = require('./models/evento.model');

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.options('*', cors());
app.use(cors());


/**
 * DB
 */
sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos sincronizada con las relaciones');
  });
  

/**
 * endpoints
 */
app.use('/patinadores', patinadoresRoutes);
app.use('/eventos', eventosRoutes);
app.use('/register',registerRoutes);
app.use('/login', loginRoutes);


app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Patinadores Artísticos');
});



/**
 * start
 */
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});