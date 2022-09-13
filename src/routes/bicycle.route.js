const route = require('express').Router();
const controllerbicycles = require('../controllers/bicycle.controller');

route.get('/all-bicycles', controllerbicycles.findAllbicyclesController);
route.get('/bicycle/:id', controllerbicycles.findIdbicyclesController);

module.exports = route;
