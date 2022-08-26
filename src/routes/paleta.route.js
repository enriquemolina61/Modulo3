const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.controller');

route.get('/todas-paletas', controllerPaletas.findAllPaletasController);
route.get('/paleta/:id', controllerPaletas.findIdPaletasController);

module.exports = route;
