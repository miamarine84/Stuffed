const router = require("express").Router();
//const postRoutes = require("./posts");
//const authRoutes = require("./authorize");

const authRoutes = require("./auth");
const accountRoutes = require("./account");

// Post routes
//router.use("/posts", postRoutes);
//router.use("/auth", authRoutes);
router.use("/account", accountRoutes);
router.use("/auth", authRoutes);

module.exports = router;
