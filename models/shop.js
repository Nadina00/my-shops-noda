const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is a required field"],
  },

  avatar: {
    type: String,
    default: null,
  },
});


const Shop = model("shop", shopSchema);

module.exports = { Shop };
