const router = require("express").Router();

const authRoutes = require("./auth");
const accountRoutes = require("./account");
const userRoutes = require("./users");

router.use("/account", accountRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);

module.exports = router;
