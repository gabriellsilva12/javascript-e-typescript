exports.middlewareGlobal = (req, res, next ) => {
    res.locals.umaVariavelLocal = 'Este é o valor da varivel local';
    next();
}

exports.ErrorCsrf = (err, req, res, next) => {
    if (err) {
        res.render('404')
    }

    next();
}

exports.csrfToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}

