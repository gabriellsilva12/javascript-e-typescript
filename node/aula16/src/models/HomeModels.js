const mongoose = require('mongoose');
const { Schema } = mongoose;

const modelSchema = new Schema({
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
    }
})

const HomeModel = mongoose.model('Home', modelSchema)

module.exports = HomeModel;

