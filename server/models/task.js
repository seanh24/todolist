const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    userName: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },
    taskName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    description: {
        type: String,
        minlength: 1,
        maxlength: 200
    },
    dueDate: { type: Date},
    completed: { 
        type: Boolean
    }
});

module.exports = mongoose.model('Task', TaskSchema)