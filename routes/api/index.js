const router = require("express").Router();

const authRoutes = require("./auth");
const accountRoutes = require("./account");

router.use("/account", accountRoutes);
router.use("/auth", authRoutes);

module.exports = router;
