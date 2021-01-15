// var router = require("express").Router();

var db = require("../models/workoutModel");
const router = require("./htmlRoutes");

// need help with routes

router.get("/api/workouts", (req, res) => {
  console.log("I am a GET route for /workout");
  // db.Workout.find({}).then(function (workout) {
  //   res.json(workout);
  // });
});

router.get("api/workouts/:id"),
  (req, res) => {
    console.log("This is a GET Routes for workout/:id");
    // db.Workout.find({})(
    //   { _id: req.params.id },
    //   { lastWorkout: req.body.lastWorkout }
    // ).then(function (workout) {
    //   res.json(workout);
    // });
  };
// May not be a put need help with this route
router.put("api/workouts/:id", function (req, res) {
  console.log("POST api/workout/:id route");
  // db.Workout.updateOne(
  //   { _id: req.params.id },
  //   { exercise: req.body.exercise }
  // ).then(function (workout) {
  //   res.json(workout);
  // });
});

router.post("/api/workouts", function (req, res) {
  console.log("I'm a POST route for workouts");
  db.Workout.updateOne({}).then(function (workout) {
    res.json(workout);
  });
});

router.get("/api/workouts/range", function (req, res) {
  console.log("I'm a GET route for workouts/range");
  // db.find({ range: req.params.range }).then(function (workout) {
  //   res.json(workout);
  // });
});

module.exports = router;
