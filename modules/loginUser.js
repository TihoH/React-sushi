const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.post("/loginUser", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Будь ласка, введіть email та пароль" });
    }

    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(404).json({ message: "Користувача не знайдено" });
    }

    const isMatch = await bcrypt.compare(password, findUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Невірний пароль" });
    }
    const token = jwt.sign({ id: findUser._id }, "secretKey", { expiresIn: "1h" });

    return res.json({
      message: "Успішний вхід",
      user: {
        id: findUser._id,
        name: findUser.name,
        email: findUser.email,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Помилка сервера" });
  }
});

module.exports = router;
