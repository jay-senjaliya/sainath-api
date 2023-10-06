const express = require('express');

const router = express.Router();

const fixedDepartureController = require('../controllers/fixedDepartureController');

router
  .get('/', fixedDepartureController.getAll)
  .get('/:id', fixedDepartureController.getById)
  .post('/', fixedDepartureController.createFixedDeparture)
  .patch('/:id', fixedDepartureController.updateFixedDeparture)
  .delete('/:id', fixedDepartureController.deleteFixedDeparture);
module.exports = router;
