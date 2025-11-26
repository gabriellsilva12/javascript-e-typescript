const Login = require('../models/loginModels')

exports.index = (req,res, next) => {
    res.render('login')
};

exports.register = (req,res, next) => {
    // res.render('login')
    const login = new Login(req.body)
    login.register();
    res.send(login.errors)
};