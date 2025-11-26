exports.middlewareGlobal = ( req, res, next ) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
};

exports.csrfToken = ( req, res, next ) => {
    res.locals.csrfToken = req.csrfToken();

    next();
};