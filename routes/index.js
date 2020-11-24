const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
//Here we are setting the first end point in the url for when we are trying to query to the database.
//This is linked to the 'index.js' inside of the 'api' folder
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
