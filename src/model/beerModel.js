const mongoose = require('mongoose')

const BeerModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0
    }
})

const Beer = mongoose.model('Beer',BeerModel)

module.exports = Beer