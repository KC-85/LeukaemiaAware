// backend/routes/profile.js
const express = require("express");
const { getUserProfile } = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getUserProfile);

module.exports = router;
