const http = require("http");
const PORT = 5000;

const Sushi = require("./models/sushi");
require("dotenv").config();
const connectDB = require("./db");

connectDB();

const server = http.createServer(async (req, res) => {
  // Добавляем заголовок CORS во все ответы // нужно уточнить об этом (понять)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Обрабатываем preflight запросы OPTIONS //  нужно уточнить об этом (понять)
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // if ( req.url === "/" && req.method === "GET") {
  //   res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  //   res.end("Сервер суши работает 🍣");
  //   return;
  // }

  if (req.url === "/sushi" && req.method === "GET" ) {
    try {
      const data = await Sushi.find();
       console.log("Найдено документов:", data.length);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Ошибка при получении суши");
    }
    return;
  }
  if(req.url === '/sushi/category' && req.method === 'GET'){
    console.log(req.url)
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Страница не найдена");
});

server.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});