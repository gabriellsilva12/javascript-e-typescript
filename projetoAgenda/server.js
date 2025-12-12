require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const flash = require('connect-flash')
const MongoStore = require('connect-mongo')
const session = require('express-session')
const helmet = require('helmet')
const csrf = require('csurf')

const app = express();

mongoose.connect(process.env.DATABASE)
    .then(() => {
        app.emit('ok')
        console.log('Deu certo')
    });

const path = require('path')
const routes = require('./routes')
const { middlewareGlobal, ErrorCsrf, csrfToken } = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "https://cdn.jsdelivr.net"],
        "style-src": ["'self'", "https://cdn.jsdelivr.net"],
        "img-src": ["'self'", "blob:", "data:"],
        "connect-src": ["'self'", "https://cdn.jsdelivr.net"],
      },
    },
  })
);

const sessionOptions = session({
    secret: 'fdsfsd',
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(csrf())
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//Nossos middlewares
app.use(middlewareGlobal)
app.use(csrfToken)
app.use(ErrorCsrf)
app.use(routes)

app.on('ok', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000/login')
        console.log('Servidor executando na porta 3000')
    });
})