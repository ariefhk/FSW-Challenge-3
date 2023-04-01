const express = require("express");
const path = require("path");
const dir = path.resolve();
const staticFilePath = path.join(dir, "public");

const app = express();
console.log(staticFilePath);
app.use(express.static(staticFilePath));

app.get("/", (req, res) => {
  res.sendFile(path.join(staticFilePath, "index.html"));
});

app.get("/cars", (req, res) => {
  res.sendFile(path.join(staticFilePath, "cari_mobil.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Server Listen on port http://localhost:",
    process.env.PORT || 3000
  );
});
