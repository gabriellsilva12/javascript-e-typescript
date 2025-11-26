
exports.paginaInicial = (req,res,next) => {
    res.render('index', {
        titulo: 'Este vai ser o <span style="color: red">titulo</span> da pagina',
        numeros: [1,2,3,4,5,6,7,8,9]
    })
    return;
};
// POST
exports.tratarPost = (req, res) => {
    res.send(req.body)
    return;
};
