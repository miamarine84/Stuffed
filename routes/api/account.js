const authController=require('../../controllers/authController');
const router = require("express").Router();



// Matches with "/api/posts"

// Matches with "/api/posts/:id"
router
  .route("/").post(authController.signUp);

module.exports = router;
