const express = require("express")
const db = require("../models/workout");
const app = express();



//All routes

//GET all workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, async (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

//GET the last 7 wrkouts
app.get("/workouts/range", (req, res) => {
    db.Workout.find().sort({ day: -1 }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

//Create new workout

app.post("/api/workouts", ({ body },res) => {
    db.Workout.create(body, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

//Update a workout

app.put("/workouts/:id", ({ body },res) => {
    db.Workout.create(body, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

module.exports = app;