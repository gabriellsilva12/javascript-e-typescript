const express = require("express");
const route = express.Router()
const homeControler = require('./src/controllers/homeController')

const { paginaInicial,tratarPost } = homeControler;

route.get('/', paginaInicial)
route.post('/', tratarPost)

module.exports = route;