import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    name: String,
    description: String,
    completed : Boolean
},
    {
        timestamps: true
    }
)

const Task = mongoose.models.Topic || mongoose.model('Task', taskSchema) 

export default Task