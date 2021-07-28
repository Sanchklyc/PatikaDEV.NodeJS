const http = require("http");
const PORT_NUMBER = 5000;
const server = http.createServer((req, res) => {
  console.log("Request get.");
  let url = req.url;
  switch (url) {
    case "/index":
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.write("<h2>Ana Sayfaya Hoşgeldiniz.</h2>");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.write("<h2>Hakkımızda Sayfasına Hoşgeldiniz.</h2>");
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.write("<h2>İletişim Sayfasına Hoşgeldiniz.</h2>");
      break;
    default:
      res.writeHead(404,{"Content-Type": "text/html; charset=UTF-8"});
      res.write("<h2>404 Not Found</h2>");
      break;
  }
  res.end();
});

server.listen(PORT_NUMBER, () => {
  console.log(`Listening on port ${PORT_NUMBER}`);
});
