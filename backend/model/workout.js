const { model, Schema } = require("mongoose");

const workoutSchema = new Schema(
  {
    name: String,
    description: String,
    duration: Number, // Duration in minutes
  },
  { timeStamps: true }
);

const Workout = model("Workout", workoutSchema);
module.exports = Workout;
