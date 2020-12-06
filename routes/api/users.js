const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/posts"
router.route("/").post(userController.register);

router.route("/search").get(userController.findUser);

module.exports = router;
