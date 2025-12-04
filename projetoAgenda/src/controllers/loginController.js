const { Login, existingUserLogin } = require('../models/loginModels')

exports.index = (req, res) => {
    res.render('login')
};
exports.loginHome = (req, res) => {
    res.render('index')
};

exports.register = async (req, res) => {
    
    try {
        const login = new Login(req.body)
        await login.register()
        
        if (login.errors.length > 0) {
            
            req.flash('errors', login.errors);
            req.session.save(function () {
                res.redirect('/login');
            });
            return;
        }
        
        if (login.success.length > 0) {
            req.flash('success', 'Usuario criado com sucesso!')
            res.redirect('/login')
        }
    } catch (e) {
        console.log(e)
    }
}

exports.login = async (req, res) => {
    
    try {
        const login = new existingUserLogin(req.body)
        
        await login.register()
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                res.redirect('/login');
                return;
            });
            return;
        }
        
        req.flash('success', 'Você entrou no sistema.');
        req.session.user = login.user;
        req.session.save(function () {
            console.log(req.session.user)
            res.redirect('/login/enter');
            return;
        });
    } catch (e) { console.log(e) }
    
}

exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/login')
};