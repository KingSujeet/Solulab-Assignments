const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName : {
        type: String,
        required: true,
    },
    qtyPerUnit : {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    unitPrice : {
        type: Number,
        default:0
    },
    unitInStock : {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    discontinued : {
        type: Boolean,
        default: false
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

exports.Product = mongoose.model('Product', productSchema)