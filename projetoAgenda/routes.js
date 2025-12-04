const express = require("express");
const route = express.Router()
const homeControler = require('./src/controllers/homeController')
const loginControler = require('./src/controllers/loginController')

// rota de home
// route.get('/', homeControler.index)

// rotas de login
route.get('/login', loginControler.index)
route.post('/login/register', loginControler.register)

route.post('/login/login', loginControler.login)
route.get('/login/logout', loginControler.logout)
route.get('/login/enter', loginControler.loginHome)

module.exports = route;