const router = require("express").Router();
//const postRoutes = require("./posts");
//const authRoutes = require("./authorize");


const accountRoutes = require("./account");

// Post routes
//router.use("/posts", postRoutes);
//router.use("/auth", authRoutes);
router.use("/account", accountRoutes);

module.exports = router;
