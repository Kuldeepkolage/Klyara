const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createDiet,
  getDiet,
} = require("../controllers/dietController");

router.post("/", protect, createDiet);
router.get("/", protect, getDiet);

module.exports = router;