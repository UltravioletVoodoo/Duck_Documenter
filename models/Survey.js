const mongoose = require('mongoose')

const SurveySchema = new mongoose.Schema({
    time: {
        type: String,
        required: [true, 'Time is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    duckNumber: {
        type: Number,
        required: [true, 'Number of Ducks is requried']
    },
    foodType: {
        type: String,
        required: [true, 'Type of Food is required']
    },
    foodAmount: {
        type: String,
        required: [true, 'Amount of food is required']
    },
    comments: {
        type: String,
        required: false
    }
})

module.exports = mongoose.models.Survey || mongoose.model('Survey', SurveySchema)