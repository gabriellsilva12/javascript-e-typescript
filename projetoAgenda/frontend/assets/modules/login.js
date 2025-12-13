import validator from 'validator';

export default function login(formClass) {
    this.form = document.querySelector(formClass)
}

login.prototype.init = function () {
    if (!this.form) return; 
    this.events()
}

login.prototype.events = function () {
    this.form.addEventListener('submit', e => {
        e.preventDefault(); // faz uma checagem no formulario antes de enviar para o back-end
        this.validate(e);
    })
}

login.prototype.validate = function (e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"')
    const passwordInput = el.querySelector('input[name="password"')
    let errors = false;
    let errorsInputs = [];

    if (!validator.isEmail(emailInput.value)) {
        errorsInputs.push('Email inválidoo!')
        errors = true
    }
    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
        errorsInputs.push('Senha inválida, sua senha deve ter entre 3 e 50 caracteres!')
        errors = true
    }

    if (errorsInputs.length > 0) {
        const message = document.querySelector('#messagesValida');
        const div = document.createElement('div');
        message.innerHTML = '';
        div.className = 'alert alert-danger'
        errorsInputs.forEach(e => {
            div.innerHTML += `${e} <br>`
        });
        message.appendChild(div)
    }

    if (!errors) el.submit()
}