const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    imageUrl: String,
    pet_variety: String,
    description: String,
    price: String
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;





db.collectionName.insertOne({
  _id: ObjectId("6650406967652595e3018b55"),
  imageUrl: "https://m.media-amazon.com/images/I/51cWGLoI5LL._SX300_SY300_QL70_FMwe…",
  pet_variety: "cat",
  description: "Whiskas Adult (+1 year) Dry Cat Food, Chicken Flavour",
  price: 420
});