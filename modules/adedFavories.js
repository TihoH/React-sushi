const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/adedToFavorites/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cardItem = req.body

    const findItemFavorits = await User.findByIdAndUpdate(
      id,
      { $addToSet: { favoriteProducts: cardItem } }, // добавляем без дублей ( $addToSet - добавит если такого елемента нет , можно использовать push но тогда в любом случает будет добавление )
      { new: true } //new: true - вернуть уже обнволенный документ (сохранить в переменную findItemFavorits)
    );

    console.log(User)

    return res.json(findItemFavorits)

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});




module.exports = router;
