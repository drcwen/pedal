
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

module.exports = router;