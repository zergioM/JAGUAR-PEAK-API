const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth.routes');
const localRoutes = require('./routes/local.routes');
const clienteRoutes = require('./routes/cliente.routes');
const productoRoutes = require('./routes/producto.routes');
const trabajadorRoutes = require('./routes/trabajador.routes');
const inventarioRoutes = require('./routes/inventario.routes');

const app = express();

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/locales', localRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/trabajadores', trabajadorRoutes);
app.use('/api/inventarios', inventarioRoutes);

app.get('/', (req, res) => {
    res.send('🆗 Jaguar Peak API funcionando correctamente');
});

// Nota: aquí NO se llama a app.listen(). El arranque del servidor
// ocurre solo en server.js, después de confirmar la conexión a la BD.
module.exports = app;
