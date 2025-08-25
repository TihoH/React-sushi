const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.patch("/editDataUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { phone, address } = req.body;

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "Пользователь не найден" });

    if (phone) user.phone = phone;
    if (address) user.address = address;

    await user.save(); // ✅ updatedAt обновится автоматически

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});




module.exports = router;
