const http = require("node:http");

function listener(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>My website</h1>");
}
const app = http.createServer(listener);

app.listen(8081, () => {
  console.log("Server is listening");
});
