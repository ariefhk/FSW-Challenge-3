const express = require("express");
const path = require("path");
// const dir = path.resolve();
// const staticFilePath = path.join(dir, "public");
const app = express();

const filePath = path.join(__dirname, "../public");

// app.use(express.static("public"));
app.use(express.static(filePath));

app.get("/", (req, res) => {
  // res.sendFile(path.join(staticFilePath, "index.html"));
  res.sendFile(path.join(filePath, "index.html"));
});

app.get("/cars", (req, res) => {
  // res.sendFile(path.join(staticFilePath, "cari_mobil.html"));
  res.sendFile(path.join(filePath, "cari_mobil.html"));
});

app.get("*", function (req, res) {
  res.send("Halaman Tidak ditemukan!", 404);
});

app.listen(3000, () => {
  console.log("Server Listen on port http://localhost:%d", 3000);
});
