
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

dotenv.config();
app.use(express.json());

const inventory = require('./routes/inventory')
app.use('/inventory', inventory)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
    console.log('Server is running on port: ' + process.env.PORT)
})