const Model = require('../models/HomeModels')

Model.create({
    nome: 'Gabriel', 
    sobrenome: 'Silva', 
    idade: 22
})

exports.paginaInicial = (req,res,next) => {
    res.render('index')
    return;
};
// POST
exports.tratarPost = (req, res) => {
    res.send(req.body)
    return;
};
