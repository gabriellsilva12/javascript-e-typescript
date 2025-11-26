const express = require('express');
const routes = express.Router();

const { homePageGet } = require('./controllers/homePage')

routes.get('/', homePageGet)

module.exports = routes;