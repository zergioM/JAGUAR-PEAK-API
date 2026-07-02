const jwt = require('jsonwebtoken');
require('dotenv').config();

const generarToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '8h'
    });
};

const verificarToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generarToken, verificarToken };
