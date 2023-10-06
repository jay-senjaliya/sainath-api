const express = require("express");
const multer = require("multer");

const router = express.Router();

const destinationController = require("./../controllers/destinationController");

router
  .get("/", destinationController.getAll)
  .get("/:id", destinationController.getById)
  .post("/", destinationController.createDestination)
  .patch("/:id", destinationController.updateDestination)
  .delete("/:id", destinationController.deleteDestination);

module.exports = router;
