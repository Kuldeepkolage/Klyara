const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

router.post("/", protect, createWorkout);
router.get("/", protect, getWorkouts);
router.put("/:id", protect, updateWorkout);
router.delete("/:id", protect, deleteWorkout);

module.exports = router;