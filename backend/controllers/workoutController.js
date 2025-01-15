const Workout = require("../model/workout");

const createWorkout = async (req, res) => {
  const { name, description, duration } = req.body;

  try {
    const newWorkout = new Workout({ name, description, duration });
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(500).json({ message: "Failed to create workout", error });
  }
};

module.exports = { createWorkout };
