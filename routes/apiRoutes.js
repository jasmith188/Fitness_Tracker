const router = require("express")
const Workout = require("../models/workout");

//All routes

//GET all workouts
app.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, Workout) => {
        if (err) throw err;
        res.json(Workout);
    })
});

//GET the first 7 wrkouts




//Create new workout

router.post("/workouts", ({ body }, res) => {
    Workout.create(body, (err, Workout) => {
        if (err) throw err;
        res.json(Workout);
    })
});

//Update a workout
