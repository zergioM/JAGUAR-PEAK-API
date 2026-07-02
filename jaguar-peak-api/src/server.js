require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');
const { crearSuperAdmin } = require('./seeders/superadmin.seed');
require('./models');

const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(async () => {
        console.log('Base de datos conectada');
        await crearSuperAdmin();
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Error al conectar la base de datos: ', err));
