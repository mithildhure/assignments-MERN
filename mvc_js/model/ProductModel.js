const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    pname : {
        type : String,
        minlenght : 3,
        lowercase : true,
        required : true,
    },
    price : {
        type : Number,
        min : 200,
        required : true
    },
    category : {
        type : String,
        enum : ["Electronics","Clothing","Food"],
        required : true
    }
});

const productModel = mongoose.model("product",productSchema);

module.exports = productModel;