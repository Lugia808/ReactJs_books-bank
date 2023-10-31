const express = require('express');
const app = express()
const handlebars = require('handlebars')
const { sequelize } = require('./models/database')
const Books = require('./models/Books')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/create', (req, res) => {

    Books.create({
        title: req.body.title
    })

})

app.get('/consultar', (req, res)=>{
    Books.findAll()
})

app.listen(8080, () => {
    console.log('servidor rodando na porta 8080')
})