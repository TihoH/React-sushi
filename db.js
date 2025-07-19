const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Sushi = require('./models/sushi');
const sushiData = require('./sushiData'); // если вынес в отдельный файл

dotenv.config();

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await Sushi.deleteMany(); // если хочешь очистить сначала
    await Sushi.insertMany(sushiData);
    console.log('✅ Данные успешно загружены!');
    process.exit();
  } catch (error) {
    console.error('❌ Ошибка загрузки:', error.message);
    process.exit(1);
  }
};

start();