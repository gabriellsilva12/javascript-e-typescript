const express = require("express");
const route = express.Router()
const homeControler = require('./controllers/homeController')
const users = require('./controllers/users')

const { paginaInicial,tratarPost } = homeControler;
const { usuariosGet,usuariosPost } = users;

route.get('/teste', paginaInicial)
route.post('/teste', tratarPost)

route.get('/teste/user', usuariosGet) 
route.post('/test/user', usuariosPost)

module.exports = route;