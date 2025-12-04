const path = require('path')
const UserLogin = require('../models/loginModel')

exports.loginGet = (req, res) => {
    res.render('login')
}

exports.loginPost = (req, res) => {
    const userLogin = new UserLogin(req.body)
    userLogin.register()
    if (userLogin.errors.length > 0) {
        req.flash('error', userLogin.errors)
        req.session.save(function () {
            res.redirect('/');
            return;
        })
        return;
    }
}
