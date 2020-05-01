const express = require("express")
const db = require("../models/workout");
const app = express();



//All routes

//GET all workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
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

router.put("/api/workouts/:id", function(req, res, next) {
    console.log(req.body);
    Workout.findByIdAndUpdate(req.params.id,
        { "$push": { "exercises": req.body } },
        { "new": true, "upsert": true },
        function (err, data) {
            if (err) throw err;
            console.log(data);
        }
    );
});

module.exports = app;