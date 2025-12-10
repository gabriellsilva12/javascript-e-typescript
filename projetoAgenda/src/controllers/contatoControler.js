const contatoModel = require('../models/contatoModels')

exports.index = (req, res) => {
    res.render('contato', { contato: '' })
}

exports.register = async (req, res) => {
    try {
        const contato = new contatoModel(req.body)
        await contato.register()
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            req.session.save(function () {
                res.redirect('/contato/index')
                return;
            })
            return;
        }

        if (contato.contato) {
            req.flash('success', 'Contato registrado com sucesso!')
            req.session.save(function () {
                res.redirect(`/contato/index/${contato.contato._id}`)
                return;
            });
            return;
        }
    } catch (e) {
        res.render('404')
        console.log(e)
    }
}

exports.editIndex = async (req, res) => {
    const Contato = new contatoModel()
    if (!req.params.id) return res.render('404'); // checar como isso funciona e como esta chegando

    const contato = await Contato.buscaPorId(req.params.id)

    if (!contato) return res.render('404');
    res.render('contato', { contato })
}

exports.edit = async (req, res) => {

    try {
        if (!req.params.id) return res.render('404');
        const contato = new contatoModel(req.body)

        await contato.edit(req.params.id)

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            req.session.save(function () {
                res.redirect('/contato/index')
                return;
            })
            return;
        }
        if (contato.contato) {
            req.flash('success', 'Contato editado com sucesso!')
            req.session.save(function () {
                res.redirect(`/contato/index/${contato.contato._id}`)
                return;
            })
            return;
        }
    } catch(e) { 
        console.log(e) 
        res.render('404')
    }
}