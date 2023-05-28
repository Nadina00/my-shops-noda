const { Schema, model } = require("mongoose");

const orderSchema = new Schema ({
    user: {
        type: Object,
    },
    products:{
        type: Array
    }
      
})
const Order = model("Order", orderSchema)

module.exports= {Order}