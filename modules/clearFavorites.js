const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.delete("/clearFavorites/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: "User ID не передан" });

    // Обнуляем избранное
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { favoriteProducts: [] } },
      { new: true }
    ).select("favoriteProducts");

    if (!updatedUser) return res.status(404).json({ message: "Пользователь не найден" });

    res.json({ message: "Список избранного очищен", favoriteProducts: updatedUser.favoriteProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;
