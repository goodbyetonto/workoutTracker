const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Workout type required!"
            },

            name: {
                type: String,
                trim: true, 
                required: "Workout name required!"
            },

            duration: {
                type: Number, 
                trim: true, 
                required: "Workout duration required!"
            }, 

            weight: {
                type: Number, 
                trim: true
            }, 

            reps: {
                type: Number, 
                trim: true
            }, 

            sets: {
                type: Number, 
                trim: true
            }   
        }
    ]
}, 
{
    //show any virtual properties when data is requested
    toJSON: {
        virtuals: true
    }
}
);

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;