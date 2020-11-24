const userController=require('../../controllers/userController');
const router = require("express").Router();



// Matches with "/api/posts"

// Matches with "/api/posts/:id"
router
  .route("/signup").post(userController.create);

module.exports = router;
