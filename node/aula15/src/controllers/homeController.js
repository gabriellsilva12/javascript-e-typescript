
exports.paginaInicial = (req,res,next) => {
    res.render('index')
    return;
};
// POST
exports.tratarPost = (req, res) => {
    res.send(req.body)
    return;
};
