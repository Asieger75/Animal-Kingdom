const router = require("express").Router();
const animalController = require("../../controllers/animalController");
router.route("/").get(animalController.findAll);
router.route("/continent/:continent").get(animalController.findByContinent);
// .post(animalController.create);
// Matches with "/api/animal/:id"
router.route("/:id").get(animalController.findById);
// router.route();
// .put(animalController.update)
// .delete(animalController.remove);
module.exports = router;