const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user");

router.get("/getUserData/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password"); // убираем пароль
    if (!user) return res.status(404).json({ message: "Пользователь не найден" });
    res.json(user); // теперь будет и createdAt, и updatedAt
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});


module.exports = router;
