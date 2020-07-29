const router = require("express").Router();
const workout = require("../models/workoutModel.js");

router.get("/api/workouts",(req,res) => {
    workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
})

module.exports = router;