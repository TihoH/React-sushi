const mongoose = require("mongoose");

const itemProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: String,
  category: String,
  price: { type: Number, required: true },
  stock: Number,
  weight: String,
  imageUrl: String,
  createdAt: { type: String, default: () => new Date().toISOString() },
  updatedAt: { type: String, default: () => new Date().toISOString() },
  quantity: { type: Number, default: 1 } // кол-во в заказе
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  items: [itemProductSchema],
});

module.exports = mongoose.model("User", userSchema);