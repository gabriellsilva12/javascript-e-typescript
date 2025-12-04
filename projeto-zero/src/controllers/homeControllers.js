const path = require('path');
const Login = require('../models/homeModels')

exports.homeGet = (req,res) => {
    res.render('indexGet');
};

exports.homePost = async (req,res) => {
    
    try { 
        const login = new Login(req.body)
        await login.register()
        console.log(login.errors)
        if(login.errors.length > 0) {
            req.flash('error', login.errors)
            req.session.save(function() {
                res.redirect('/');
                return;
            })
            return;
        }
        res.redirect('/login')
    } catch(e) {
        console.log(e)
    }
};