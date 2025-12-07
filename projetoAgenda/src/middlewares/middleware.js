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

exports.usercheck = ( req, res, next) => {
    
    if (!req.session.user) {
        req.flash('errors', 'Você não esta logado.')
        req.session.save(function() {
            res.redirect('/login')
            return;
        })
        return;
    }
    next();
}

exports.csrfToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next()
}

