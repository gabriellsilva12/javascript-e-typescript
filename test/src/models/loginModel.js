const mongoose = require('mongoose');
const validator = require('validator')
const { Schema, model } = mongoose;

const loginSchema = Schema({
    user: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})
const loginModel = model('login', loginSchema)

class userLogin {
    constructor(body) {
        this.body = body
        this.errors = []
        this.user = []
    }

    register() {
        this.verification()
        if(this.errors.length > 0) return

    }

    verification() {
        this.clean();
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
        if(this.body.password.length < 3 || this.body.password.length > 50) this.errors.push('Sua senha deve ter entre 3 e 50 caracteres.');
    }




    clean() {
        this.body = {
            user: this.body.user,
            email: this.body.email,
            password: this.body.password
        }

        for(const key in this.body) {
            if(this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }
    }
}

module.exports = userLogin;
