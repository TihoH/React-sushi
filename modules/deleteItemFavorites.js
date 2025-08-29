const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.delete("/deleteItemFavorites/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {productId} = req.body


    if (!id) return res.status(400).json({ message: "User ID не передан" });

    // Обнуляем избранное
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $pull: { favoriteProducts: {id: productId} } },
      { new: true }
    ).select("favoriteProducts");

    if (!updatedUser) return res.status(404).json({ message: "Пользователь не найден" });

    res.json({ message: "Успешно удалено", favoriteProducts: updatedUser.favoriteProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;
