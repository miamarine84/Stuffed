const authController=require('../../controllers/authController');
const router = require("express").Router();
//This is the route to sign up "api/signup"
router.route("/signup").post(authController.signUp);

module.exports = router;
