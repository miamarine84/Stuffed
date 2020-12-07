
const userController=require('../../controllers/userController');
const router = require("express").Router();
//This is the route to sign up "api/signup"
router.route("/sendLike").put(userController.liked);

module.exports = router;
