const { Router } = require("express");

const imagesRoutes = Router();

const ImagesController = require("../controllers/ImagesController");
const imagesController = new ImagesController();

imagesRoutes.post("/", imagesController.create);

module.exports = imagesRoutes;