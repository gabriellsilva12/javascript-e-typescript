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
route.get('/login/enter', usercheck, loginControler.loginHome)


// rotas contato
route.get('/contato/index', usercheck, contatoControler.index) // pagina inicial de contato
route.post('/contato/register', usercheck, contatoControler.register) // pagina que ira verificar os dados e criar o contato e no final redirecionar para /contato/index/:id
route.get('/contato/index/:id', usercheck, contatoControler.editIndex) // aqui ele ja tem o id do usuario criado dentro de um parametro e ele ira buscar a partir desse id no banco de dados o usuario, e salvar no ejs como uma variavel que podera ser reaproveitado depois( na proxima rota )

route.post('/contato/edit/:id', usercheck, contatoControler.edit) // apos ser redirecionado essa rota tambem tera dentro dela o id do usuario que foi criado 
route.get('/contato/delete/:id', usercheck, contatoControler.delete) 

module.exports = route;