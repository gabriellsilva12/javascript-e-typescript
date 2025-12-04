const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs')
const { Schema } = mongoose;

const loginSchema = new Schema({
    email: { type: String, require: true },
    password: { type: String, require: true }
})

const loginModel = mongoose.model('login', loginSchema)

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.success = [];
        this.user = null;
    }

    async register() {

        this.valida()
        if (this.errors.length > 0) return;

        await this.userLoginExists();
        if (this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt)
        this.user = await loginModel.create(this.body)

        if (this.user) this.success.push('Usuario criado!') 
    }

    async userLoginExists() {
        const userLogin = await loginModel.findOne({ email: this.body.email })
        if(userLogin) this.errors.push('Usuario já existe!')
    }

    valida() {
        this.cleanUp()

        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
        if (this.body.password.length < 3 || this.body.password.length >= 50) this.errors.push('A senha precisa ter entre 3 e 50 caracteres.')
    }

    cleanUp() {
        this.body = {
            email: this.body.email,
            password: this.body.password
        }

        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
    }
}


class existingUserLogin {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.success = [];
        this.user= null;
    }

    async register() {

        await this.verification()
        if (this.errors.length > 0) return;
    }

    async verification() {
        this.body = {
            email: this.body.email,
            password: this.body.password
        }

        this.user = await loginModel.findOne({ email: this.body.email })
        if (!this.user) {
            this.errors.push('Usuario não existe')
            return
        }
            
        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Senha inválida!')
        }
    }

    valida() {
        // this.cleanUp()

        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
        if (this.body.password.length < 3 || this.body.password.length >= 50) this.errors.push('A senha precisa ter entre 3 e 50 caracteres.')
    }
}



module.exports = { Login, existingUserLogin }


