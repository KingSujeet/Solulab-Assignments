const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    categoryName : String,
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

exports.Category = mongoose.model('Category', categorySchema)