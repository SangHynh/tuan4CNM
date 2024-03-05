const express = require("express");
const PORT = 3000;
const multer = require('multer');

const upload = multer();
const app = express();
const data = require('./store');

app.use(express.static("./pages"));

app.set("view engine", "ejs");

app.set("views", "./pages");

app.get("/save", (req, res) => {
  return res.render("index",{data});
});

app.post('/save', upload.fields([]), (req, res) => {
    console.log('req.body = ', req.body);
    data.push(req.body);
    return res.render('index', { data: data });
  });

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
