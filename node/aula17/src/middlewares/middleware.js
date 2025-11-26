exports.middlewareGlobal = (req, res, next ) => {
    res.locals.umaVariavelLocal = 'Este é o valor da varivel local';
    next();
}

exports.ErrorCsrf = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) [
        res.render('404')
    ]
}

exports.csrfToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}

