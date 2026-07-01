const Workout = require("../models/Workout");

// Create Workout
const createWorkout = async (req, res) => {
  try {
    const { workoutName, duration, caloriesBurned, date } = req.body;

    if (!workoutName || !duration || !caloriesBurned) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }

    const workout = await Workout.create({
      user: req.user,
      workoutName,
      duration,
      caloriesBurned,
      date,
    });

    res.status(201).json({
      message: "Workout Added Successfully",
      workout,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get All Workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({
      user: req.user,
    }).sort({ createdAt: -1 });

    res.status(200).json(workouts);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Workout
const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user,
    });

    if (!workout) {
      return res.status(404).json({
        message: "Workout Not Found",
      });
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Workout Updated Successfully",
      workout: updatedWorkout,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Workout
const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user,
    });

    if (!workout) {
      return res.status(404).json({
        message: "Workout Not Found",
      });
    }

    await workout.deleteOne();

    res.status(200).json({
      message: "Workout Deleted Successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
};