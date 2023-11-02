const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const handlebars = require("handlebars");
const { sequelize } = require("./models/database");
const Books = require("./models/Books");


app.use(bodyParser.json());

app.get("/create", (req, res) => {
  Books.create({
    title: req.body.title,
  });
});

app.get("/consultar", (req, res) => {
    const { title } = req.query; // Use req.query para acessar os parâmetros da URL
    console.log('rodando')
  
    if (title) {
      Books.findAll({ where: { title: title } }).then((result) => {
        if (result.length > 0) {
          console.log('Um ou mais resultados foram encontrados:', result);
        } else {
          console.log('Nada foi encontrado.');
        }
      });
    } else {
      console.log('Parâmetros ausentes na URL.');
    }
  });
  

app.listen(8080, () => {
  console.log("servidor rodando na porta 8080");
});
