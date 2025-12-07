const express = require("express");
const route = express.Router()
const homeControler = require('./src/controllers/homeController')
const loginControler = require('./src/controllers/loginController')
const contatoControler = require('./src/controllers/contatoControler')

const { usercheck } = require('./src/middlewares/middleware')

// rota de home
// route.get('/', homeControler.index)

// rotas de login
route.get('/login', loginControler.index)
route.post('/login/register', loginControler.register)

route.post('/login/login', loginControler.login)
route.get('/login/logout', loginControler.logout)
route.get('/login/enter', loginControler.loginHome)


// rotas contato
route.get('/contato/index', usercheck, contatoControler.index)
route.post('/contato/register', contatoControler.register)
route.get('/contato/index/:id', contatoControler.editIndex)

module.exports = route;