const express = require('express');
const route = express.Router();
const path = require('path');

const { homeGet, homePost } = require(path.resolve(__dirname, 'src', 'controllers', 'homeControllers'));

route.get('/', homeGet);
route.post('/', homePost);

module.exports = route;