// clearUsers.js
const mongoose = require("mongoose");
const User = require("./models/user"); // путь к твоей модели
require("dotenv").config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Подключено к базе");

    // Удаляем всех пользователей
    const result = await User.deleteMany({});
    console.log(`🗑️ Удалено ${result.deletedCount} пользователей`);

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
})();
