
const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    
    modelId: {
        type: String,
        required: true,
        unique: true
    },

    modelName : {
        type: String,
        required: true,
        unique: true
    },

    modelType: {
        type: String,
        required: true,
    },

    rentalRatePerHour : {
        type: Number,
        required: true
    },

    modelImage: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Model', modelSchema);    