// backend/routes/index.js
const express = require("express");
const profileRoutes = require("./profile");

const router = express.Router();

router.use("/profile", profileRoutes);

module.exports = router;
