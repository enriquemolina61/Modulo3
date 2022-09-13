const bicyclesService = require('../service/bicycle.service');

const findAllbicyclesController = (req, res) => {
  const bicycles = bicyclesService.findAllbicyclesServices();
  res.send(bicycles);
};

const findIdbicyclesController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhabicycles = bicyclesService.findByIdbicycleServices(parametroId);
  res.send(escolhabicycles);
};

module.exports = {
  findAllbicyclesController,
  findIdbicyclesController,
};
