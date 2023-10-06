const express = require('express');

const router = express.Router();

const hotelController = require('../controllers/hotelController');

router
  .get('/', hotelController.getAll)
  .get('/:id', hotelController.getById)
  .post('/', hotelController.createHotel)
  .patch('/:id', hotelController.updateHotel)
  .delete('/:id', hotelController.deleteHotel);
module.exports = router;
