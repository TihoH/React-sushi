const mongoose = require('mongoose');

const sushiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  imageUrl: String,
  stock: { type: Number, default: 0 },
}, { timestamps: true });

const Sushi = mongoose.model('Sushi', sushiSchema);

module.exports = Sushi;