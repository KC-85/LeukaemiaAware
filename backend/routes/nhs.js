const express = require("express");
const { getHealthTopic } = require("../controllers/nhsController");
const cacheMiddleware = require("../middlewares/cacheMiddleware");

const router = express.Router();

router.get("/conditions/:topic", cacheMiddleware, getHealthTopic);

module.exports = router;
