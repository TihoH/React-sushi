  const express = require("express");
  const mongoose = require("mongoose");
  const cors = require("cors");
  require("dotenv").config();

  const Sushi = require("./models/sushi"); // твоя модель
  const connectDB = require("./db");
  const registration = require('./modules/registration')
  const loginUser = require('./modules/loginUser')
  const app = express();
  const PORT = 5000;

  // Подключение к БД
  connectDB();

  // Middleware
  app.use(express.json());
  app.use(cors()); // включает CORS (можно настроить)
  app.use(express.json()); // для парсинга JSON

  // ======= РОУТЫ =======

  // Получить все суши или по категории
  app.get("/getProduct/:id", async (req, res) => {
    const { id } = req.params;
      console.log("🔥 /getProduct/:id вызван");

    try {
      const product = await Sushi.findOne({ id: Number(id) });
      if (!product) {
        return res.status(404).send("Продукт не найден");
      }
     return res.json(product)
    } catch (error) {
      console.error("Ошибка при получении продукта:", error);
      res.status(500).send("Ошибка сервера");
    }
  });

  app.get("/search", async (req, res) => {
  const { q } = req.query;

  try {
    if (!q || q.trim() === "") {
      return res.status(400).json({ message: "Параметр запроса 'q' обязателен" });
    }

    // Поиск по полю title (регистронезависимый)
    const results = await Sushi.find({
      name: { $regex: q, $options: "i" }
    });

    res.json(results);
  } catch (error) {
    console.error("Ошибка при поиске:", error);
    res.status(500).send("Ошибка сервера");
  }
});

  // Получить все суши или по категории
  app.get("/sushi", async (req, res) => {
    const { category } = req.query;
    try {
      const filter = category ? { category } : {};
      const data = await Sushi.find(filter);
      res.json(data);
    } catch (error) {
      console.error("Ошибка при получении суши:", error);
      res.status(500).send("Ошибка сервера");
    }
  });

  app.get("/sushi/random", async (req, res) => {
  // Генерируем случайное количество: от 4 до 6
  const randomCount = Math.floor(Math.random() * 3) + 4; // 4, 5 или 6

  try {
    const randomSushi = await Sushi.aggregate([
      {
        $match: {
          id: { $gte: 1, $lte: 120 }
        }
      },
      {
        $sample: { size: randomCount }
      }
    ]);

    res.json(randomSushi);
  } catch (error) {
    console.error("Ошибка при получении случайных суши:", error);
    res.status(500).send("Ошибка сервера");
  }
});

app.use('/' , registration )
app.use('/' , loginUser )

app.post( '/:userId/orders' , async (req, res) => {
  const userId = req.params
  const items = req.body
} )

  // ======================

  app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  });