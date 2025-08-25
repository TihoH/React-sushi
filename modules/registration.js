const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user");

router.post("/registration", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Пользователь уже существует" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, address: '' , phone: '' , password: hashedPassword  });
    await newUser.save();

    res.status(201).json({ message: "Пользователь успешно зарегистрирован" , userId: newUser._id, });
  }  catch (error) {
    console.error("Ошибка при регистрации:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;
