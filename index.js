  const express = require("express");
  const mongoose = require("mongoose");
  const cors = require("cors");
  require("dotenv").config();

  const Sushi = require("./models/sushi"); // твоя модель
  const connectDB = require("./db");

  const app = express();
  const PORT = 5000;

  // Подключение к БД
  connectDB();

  // Middleware
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

  // Получить все суши или по категории
  app.get("/sushi", async (req, res) => {
    console.log("📦 /sushi вызван");
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

  // ======================

  app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
  });