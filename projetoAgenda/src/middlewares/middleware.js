exports.middlewareGlobal = (req, res, next ) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user
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

