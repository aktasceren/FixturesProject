const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

//Template Engine
app.set("view engine", "ejs");

// middlewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}
));


app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/", (req, res) => {
    res.render('index');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});