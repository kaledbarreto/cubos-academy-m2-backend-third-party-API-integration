const express = require('express');
const buscas = require('../controllers/buscas');

const rotas = express();

rotas.get('/consultar', buscas.mostrarVotos);
rotas.post('/votacao/:pais/:ip', buscas.buscarVoto);

module.exports = rotas;