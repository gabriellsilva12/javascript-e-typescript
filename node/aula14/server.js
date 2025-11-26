const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATABASE)
.then(() => {
    app.emit('ok')
    console.log('Deu certo')
});


const path = require('path')
const routes = require('./routes')
const { middlewareGlobal }= require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//Nossos middlewares
app.use(middlewareGlobal)
app.use(routes)


app.on('ok',() => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    });
})