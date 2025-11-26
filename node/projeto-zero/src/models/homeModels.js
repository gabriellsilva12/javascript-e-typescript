const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const homeSchema = Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
})

const homeModel = model('home', homeSchema)
module.exports = homeModel;
