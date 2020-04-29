const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    trim: true,
    required: "Enter a name for transaction"
  },
  exercises: [{
      type: {
        type: String,
        trim: true,
        required: "Type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "name of exercise"
      },
      duration: {
        type: Number,
        trim: true,
        required: "Type of exercise"
      },
      weight: {
        type: Number,
        trim: true,
        required: "Type of exercise"
      },
      reps: {
        type: Number,
        trim: true,
        required: "Type of exercise"
      },
      sets: {
        type: Number,
        trim: true,
        required: "Type of exercise"
      },
      distance: {
        type: Number,
        trim: true,
        required: "Type of exercise"
      },
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;