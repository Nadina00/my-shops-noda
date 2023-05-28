
const Schema = require('mongoose').Schema;
const {model} = require("mongoose")
const mongoose = require('mongoose');

const productSchema = new Schema ({
    name: {
        type: String,
    },
    price:{
        type: Number
    },
    image:{
        type: String
    },
    quantity:{
        type: Number
    }
   
})
const Product = model("Product", productSchema)

module.exports= {Product}