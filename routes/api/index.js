const router = require("express").Router();

const authRoutes = require("./auth");
const accountRoutes = require("./account");
const userRoutes = require("./users");
const likedRoutes = require("./liked");

router.use("/account", accountRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/liked", likedRoutes);

module.exports = router;
