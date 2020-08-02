const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
            },

            name: {
                type: String,
                trim: true, 
            },

            duration: {
                type: Number, 
                trim: true, 
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

const workout = mongoose.model("Workout", WorkoutSchema);

module.exports = workout;