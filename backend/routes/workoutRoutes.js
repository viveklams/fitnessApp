const express = require("express");
const router = express.Router();

const workoutController = require("../controllers/workoutController");

router.post("/workouts", workoutController.createWorkout);

module.exports = router;
