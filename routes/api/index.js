const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./authorize");
const accountRoutes = require("./account");
// Post routes
//These are the routes that we use to create a post request

//This is the route to create a user and validate the user
router.use("/user", userRoutes);
//This is the route to get information about the restauratns
router.use("/auth", authRoutes);
router.use("/account", accountRoutes);
module.exports = router;
