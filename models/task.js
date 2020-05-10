const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    day: {
        type:String,
        required: true
    },
    date: {
        type: String,
        required: true
    }, 
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    } ,
    priority:{
        type: String,
        required: true
    }

});
const Task =mongoose.model('Task',taskSchema);

module.exports = Task;
