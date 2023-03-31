const express = require("express");
const path = require("path");
const dir = path.resolve();
const staticFilePath = path.join(dir, "public");
const app = express();

app.use(express.static(staticFilePath));

app.get("/", (req, res) => {
  res.sendFile(path.join(staticFilePath, "index.html"));
});

app.get("/cars", (req, res) => {
  res.sendFile(path.join(staticFilePath, "cari_mobil.html"));
});

app.get("*", function (req, res) {
  res.send("Halaman Tidak ditemukan!", 404);
});

app.listen(3000, () => {
  console.log("Server Listen on port http://localhost:%d", 3000);
});
