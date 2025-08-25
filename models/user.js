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
  createdAt: { type: Date, default: Date.now }, // ✅ теперь Date
  updatedAt: { type: Date, default: Date.now }, // ✅ теперь Date
  quantity: { type: Number, default: 1 },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  items: [itemProductSchema],
  address: { type: String, default: "" },
  phone: { type: String, default: "" } ,
  favoriteProducts: [itemProductSchema],

}, { timestamps: true }); // автоматически добавит createdAt и updatedAt

module.exports = mongoose.model("User", userSchema);
