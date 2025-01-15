const WorkoutPlan = require("../model/workoutPlans");
const Workout = require("../model/workout");

const createWorkoutPlan = async (rea, res) => {
  const { name, description, imageUrl, workoutId } = req.body;

  try {
    const newWorkoutPLan = new WorkoutPlan({
      name,
      description,
      imageUrl,
      workoutId,
    });
    await newWorkoutPLan.save();
    res.status(201).json(newWorkoutPLan);
  } catch (error) {
    res.status(500).json({ message: "Failed to create workout plan", error });
  }
};

module.exports = { createWorkout };
