const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    tasks: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: false
    },
    userName: {
        type: String,
        required: true,
        minLength: 2,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxlength: 20
    }
})

module.exports = mongoose.model('User', userSchema)