const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Sushi = require('./models/sushi');

dotenv.config(); // загружаем .env

const sushiData = [
  {
    name: 'Филадельфия',
    description: 'Лосось, сыр, огурец',
    price: 280,
    category: 'Роллы',
    imageUrl: 'https://source.unsplash.com/featured/?sushi',
  },
  {
    name: 'Калифорния',
    description: 'Краб, авокадо, икра',
    price: 250,
    category: 'Роллы',
    imageUrl: 'https://source.unsplash.com/featured/?california-roll',
  },
];

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ Подключено к MongoDB');

    await Sushi.insertMany(sushiData);
    console.log('✅ Данные успешно добавлены');

    process.exit();
  } catch (error) {
    console.error('❌ Ошибка:', error.message);
    process.exit(1);
  }
};

start();