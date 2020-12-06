const router = require("express").Router();
const userController = require("../../controllers/userController");

//This is the route to set a liked restaurant
router.route("/liked").put(userController.liked);
//This is the route to find the users
router.route("/search").get(userController.searchUser);

module.exports = router;
