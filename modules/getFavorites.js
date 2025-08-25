const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/getFavorites/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: "User ID не передан" });

    const user = await User.findById(id).select("favoriteProducts");

    if (!user || !user.favoriteProducts) return res.json([]);

    // Возвращаем сразу массив продуктов
    res.json(user.favoriteProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});







module.exports = router;
