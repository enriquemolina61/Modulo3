const paletasService = require('../service/paleta.service');

const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasServices();
  res.send(paletas);
};

const findIdPaletasController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaPaletas = paletasService.findByIdPaletaServices(parametroId);
  res.send(escolhaPaletas);
};

module.exports = {
  findAllPaletasController,
  findIdPaletasController,
};
