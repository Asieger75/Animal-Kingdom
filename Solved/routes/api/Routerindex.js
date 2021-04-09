const router = require("express").Router();
const animalRoutes = require("./animals");

// Book routes
router.use("/animals", animalRoutes);

module.exports = router;
