const { Router } = require("express");

const imagesRoutes = Router();

const ImagesController = require("../controllers/ImagesController");
const imagesController = new ImagesController();

imagesRoutes.post("/", imagesController.create);
imagesRoutes.get("/", imagesController.show);
imagesRoutes.delete("/:id", imagesController.delete);

module.exports = imagesRoutes;