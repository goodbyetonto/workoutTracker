const express = require("express");
const router = require("express").Router();
const db = require("../models");

router.get('/api/workouts', (req, res) => {
    db.Workout.find({}, (err, data) => {
        console.log("API Call for 'All Workouts': ")
        console.log(data);
        if (err) throw err;
        res.json(data);
    });
});

router.post('/api/workouts', (req, res) => {
    const exerciseParams = {};
    if (req.body.type === "resistance") {
        exerciseParams = {
            duration: req.body.duration,
            name: req.body.name,
            reps: req.body.reps,
            sets: req.body.sets,
            type: req.body.type,
            weight: req.body.weight
        };
    } else if (req.body.type === "cardio") {
        exerciseParams = {
            distance: req.body.distance,
            duration: req.body.duration,
            name: req.body.name,
            type: req.body.type
        };
    };
    console.log(exerciseParams);
    db.Workout.create({
        day: new Date(),
        exercises: [exerciseParams]
    }, (err, data) => {
        if (err) throw err;
        res.status(200).send(data);
    })
}); 

module.exports = router;