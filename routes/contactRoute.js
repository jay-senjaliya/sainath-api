const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contactController');

router
  .get('/', contactController.getAll)
  .get('/:id', contactController.getById)
  .post('/', contactController.createContact)
  .patch('/:id', contactController.updateContact)
  .delete('/:id', contactController.deleteContact);
module.exports = router;
