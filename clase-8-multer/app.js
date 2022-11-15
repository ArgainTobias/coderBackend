const express = require('express');
const multer = require('multer');
const app = express();

const server = app.listen(8080, () => {
  console.log("Server up!");
});

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
});

app.use(express.json());

let uploader = multer({ storage });

app.post("/upload", uploader.single("archivo"), (req, res) => {
  res.send({ message: "ok" });
});
