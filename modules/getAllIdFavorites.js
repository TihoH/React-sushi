const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/getAllIdFavorites/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: "User ID не передан" });

    const user = await User.findById(id).select("favoriteProducts -_id");

    if (!user) return res.json([]);

    // Вернуть только id продуктов
    const allIds = user.favoriteProducts.map((item) => item.id);
    res.json(allIds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});






module.exports = router;
