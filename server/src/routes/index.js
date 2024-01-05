const { Router } = require("express");

const router = Router();

const usersRoutes = require("./users.routes");
const imagesRoutes = require("./images.routes");

router.use("/users", usersRoutes);
router.use("/images", imagesRoutes);

module.exports = router;