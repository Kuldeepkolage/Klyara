const Diet = require("../models/Diet");

// Create Diet Entry
const createDiet = async (req, res) => {
  try {
    const {
      mealType,
      foodName,
      calories,
      protein,
      carbs,
      fats,
      date,
    } = req.body;

    if (!mealType || !foodName || !calories) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    const diet = await Diet.create({
      user: req.user,
      mealType,
      foodName,
      calories,
      protein,
      carbs,
      fats,
      date,
    });

    res.status(201).json({
      message: "Diet Added Successfully",
      diet,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createDiet,
  getDiet,
};
// Get All Diet Entries
const getDiet = async (req, res) => {
  try {
    const diets = await Diet.find({
      user: req.user,
    }).sort({ createdAt: -1 });

    res.status(200).json(diets);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};