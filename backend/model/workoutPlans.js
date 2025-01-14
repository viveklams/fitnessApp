const { model, Schema } = require("mongoose");
const Workout = require("./workout");

const workoutPlanSchema = new Schema({
  name: String,
  description: String,
  imageUrl: String,
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Workout" }],
});

const WorkoutPlan = mongoose.model("WorkoutPlan", workoutPlanSchema);

module.exports = WorkoutPlan;
