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
        if(contato.contato) {
            // res.send(contato.body.nome + ' Criado com sucesso!')
            res.redirect(`/contato/index/${contato.contato._id}`)
        }
    } catch(e) {
        res.render('404')
        console.log(e)
    }
}

exports.editIndex = async (req, res) => {
    const Contato = new contatoModel()
    if(!req.params.id) return res.render('404'); // checar como isso funciona e como esta chegando

    const contato = await Contato.buscaPorId(req.params.id)
    
    if(!contato) return res.render('404');


    res.render('contato', { contato })
}