const express = require('express');

const router = express.Router();

const vehicleController = require('../controllers/vehicleController');

router
  .get('/', vehicleController.getAll)
  .get('/:id', vehicleController.getById)
  .post('/', vehicleController.createVehicle)
  .patch('/:id', vehicleController.updateVehicle)
  .delete('/:id', vehicleController.deleteVehicle);

module.exports = router;
