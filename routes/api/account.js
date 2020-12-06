const authController=require('../../controllers/authController');
const router = require("express").Router();



// Matches with "/api/posts"
router.route("/signup").post(authController.signUp);

module.exports = router;
