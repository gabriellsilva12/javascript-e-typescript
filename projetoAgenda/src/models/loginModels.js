const mongoose = require('mongoose');
const validator = require('validator');

const { Schema } = mongoose;
const loginSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const loginModel = mongoose.model('login', loginSchema)

class login {
    constructor(body) {
       this.body = body; 
       this.errors = [];
       this.user = null;
    }

    register() {
        this.valida();
        if (this.errors.length > 0) return 
    }

    valida() {
        this.cleanUp();
        //email
        if(!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido')
        }   
        //senha
        if(this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.')
        }
    }

    cleanUp() {
        this.body = {
            email: this.body.email,
            password: this.body.password
        }

        for (const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }
    }

    formatarDados() {
        if(this.body.password.length > 10) {
            return 'error'
        } else {
            const dados = {
                email: this.body.email,
                senha: this.body.password
            }
            return dados
        }
    }
}

module.exports = login;

