const { Router } = require("express");

const router = Router();

const sessionsRoutes = require("./sessions.routes");
const usersRoutes = require("./users.routes");
const imagesRoutes = require("./images.routes");

const ensureAuthenticated = require("../middleware/ensureAuthenticated");

router.use("/sessions", sessionsRoutes);
router.use("/users", usersRoutes);
router.use("/images", ensureAuthenticated, imagesRoutes);

module.exports = router;