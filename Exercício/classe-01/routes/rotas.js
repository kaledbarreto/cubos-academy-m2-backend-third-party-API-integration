const express = require('express');
const consultas = require('../controllers/consultas');

const rotas = express();

rotas.get('/empresas/:domain', consultas.consultarEmpresa);

module.exports = rotas;