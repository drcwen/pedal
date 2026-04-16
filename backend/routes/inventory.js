
const express = require('express')
const router = express.Router()
const inventoryModel = require('../models/inventoryModel')

router.post('/', async (req, res) => {
    try {
        const addItem = await inventoryModel(req.body);
        await addItem.save();
        res.status(201).json(addItem);
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

router.get('/solobikes', async (req, res) => {
    try {
        const getBikes = await inventoryModel.find({
            
            modelType: "Solo Bikes"
        
        });

        res.status(200).json(getBikes);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

router.get('/familybikes', async (req, res) => {
    try {
        const getBikes = await inventoryModel.find({
            
            modelType: "Family Bikes"
        
        });

        res.status(200).json(getBikes);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

module.exports = router;