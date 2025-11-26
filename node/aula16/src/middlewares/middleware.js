module.exports.middlewareGlobal = (req, res, next ) => {
    res.locals.umaVariavelLocal = 'Este é o valor da varivel local';
    next();
}