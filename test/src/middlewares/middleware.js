exports.middlewaresGlobal = (req, res, next) => {
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    res.locals.csrfToken = req.csrfToken();

    next();
}

exports.ErrorCsrfToken = (err, req, res, next) => {
    if(err || err.code === 'EBADCSRFTOKEN') {
        res.render('error')
    }
}
