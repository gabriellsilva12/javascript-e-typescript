const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = mongoose;

const modelSchema = new Schema({
    nome: { type: String, require: true },
    sobrenome: { type: String, require: false, default: '' },
    email: { type: String, require: false, default: '' },
    telefone: { type: String, require: false, default: '' },
    criadoEm: { type: Date, default: Date.now }
})

const contatoModel = mongoose.model('contato', modelSchema)

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.buscaPorId = async function (id) {
    if (typeof id !== 'string') return;
    const user = await contatoModel.findById(id);
    return user;
}

Contato.prototype.register = async function () {
    this.valida();
    if (this.errors.length > 0) return;
    this.contato = await contatoModel.create(this.body);
}

Contato.prototype.valida = function () {
    this.cleanUp()
    
    if (!this.body.nome) this.errors.push('Nome é obrigatorio, não esqueça!')
    if (!this.body.email && !this.body.telefone) this.errors.push('Por favor digite o email ou o telefone do contato.')
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
}

Contato.prototype.cleanUp = function () {
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    }

    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
}

Contato.prototype.edit = async function(id) {
    if (typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    
    this.contato = await contatoModel.findByIdAndUpdate(id, this.body, { new: true });
}

module.exports = Contato;



