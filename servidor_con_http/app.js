const http = require("http");

const PORT = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; chartset=utf-8");
  res.write("peticion recibida.../n");
  res.end("ok..!!");
});

server.listen(PORT, host, () => {
  console.log(`Servidorr escuchado en ${host}:${PORT}`);
});
