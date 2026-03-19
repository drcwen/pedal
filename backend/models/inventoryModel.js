
const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    
    bikeId: {
        type: String,
        required: true,
        unique: true
    },

    bikeName : {
        type: String,
        required: true,
        unique: true
    },

    bikeCategory: {
        type: String,
        required: true,
    },

    bikePrice : {
        type: Number,
        required: true
    },

    isForKids : {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Inventory', inventorySchema);    