const Sushi = require('./models/sushi');
const sushiData = require('./sushiData');
const connectDB = require('./db');

const start = async () => {
  await connectDB();
  await Sushi.deleteMany();
  await Sushi.insertMany(sushiData);
  console.log('✅ Данные успешно загружены!');
  process.exit();
};

start();