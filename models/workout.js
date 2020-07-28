const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema(
    {
        day: {
            type:Date,
            default:()=>new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                },
                name: {
                    type: String,
                },
                duration: {
                    type: Number,
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                }
            }
        ],
        totalDuration: {
            type: Number,
            default: 0,
            min: 0
        }
    }
)

const Workout = mongoose.model('Workout', workoutSchema)
module.exports = Workout