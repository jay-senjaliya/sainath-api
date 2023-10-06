const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer();

const packageController = require("./../controllers/packageController");

router
  .get("/", packageController.getAll)
  .get("/:id", packageController.getById)
  .post("/", packageController.createPackage)
  .patch("/:id", packageController.updatePackage)
  .delete("/:id", packageController.deletePackage);

module.exports = router;
