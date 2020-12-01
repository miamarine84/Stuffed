const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/posts"
router.route("/").post(userController.register);

// // Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
