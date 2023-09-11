const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // acıklama
    description: {
        type: String,
        required: true
    },
    // zengin tanım
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String,
    }],
    // marka
    brand: {
        type: String,
        default: ''
    },
    // fiyat
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    // Stoktaki sayım
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    // degerlendirme
    rating: {
        type: Number,
        default: 0,
    },
    // inceleme sayisi
    numReviews: {
        type: Number,
        default: 0,
    },
    // öne cıkan
    isFeatured: {
        type: Boolean,
        default: false,
    },
    // olusturulma tarihi
    dateCreated: {
        type: Date,
        default: Date.now,
    }, 
})

productSchema.method('toJSON', function() {
    const {__v, ...object} = this.toObject();
    const {_id: id, ...result} = object;
    return {...result, id};
});

exports.Product = mongoose.model('Product', productSchema);