const express = require('express');
const path = require('path');
const route = express.Router();
const loginControllers = require(path.resolve(__dirname, 'src', 'controllers', 'loginController'))

route.get('/', loginControllers.loginGet);
route.post('/', loginControllers.loginPost);

module.exports = route;