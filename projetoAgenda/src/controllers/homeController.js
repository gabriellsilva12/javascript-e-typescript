
exports.index = (req,res,next) => {
    res.render('login')
    return;
};
// POST
exports.tratarPost = (req, res) => {
    res.send(req.body)
    return;
};
