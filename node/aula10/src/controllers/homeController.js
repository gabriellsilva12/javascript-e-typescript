// GET
exports.paginaInicial = (req,res) => {
    res.render('index')
};

// POST
exports.tratarPost = (req, res) => {
    res.send(req.body.nome + ' ' + req.body.nomeOutro)
};



 
