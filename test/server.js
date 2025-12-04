require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const csurf = require('csurf');
const flash = require('connect-flash');
const helmet = require('helmet');

const app = express();
const routes = require(path.resolve(__dirname, 'routes'));

mongoose.connect(process.env.database)
.then(() => {
    app.emit('ok');
    console.log('Conectado ao banco de dados')
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(helmet())

app.use(session({
    secret: 'seuSegredoAqui',
    store: MongoStore.create({ mongoUrl: process.env.database }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
}));
app.use(csurf())
app.use(flash())

const { middlewaresGlobal, csrfToken, ErrorCsrfToken } = require(path.resolve(__dirname, 'src', 'middlewares', 'middleware'))
app.use(middlewaresGlobal) 
app.use(ErrorCsrfToken) 

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)
app.on('ok', () => {
    app.listen(3000, () => {
        console.log('Servidor ON')
        console.log('Acesse: http://localhost:' + 3000)
    })
})