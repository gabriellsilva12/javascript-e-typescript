import validator from 'validator';

export default function contato(formClass) {
    this.form = document.querySelector(formClass)
}

contato.prototype.init = function () {
    if (!this.form) return; 
    this.events();
}

contato.prototype.events = function () {
    this.form.addEventListener('submit', e => {
        e.preventDefault(); // faz uma checagem no formulario antes de enviar para o back-end
        this.validate(e);
    })
}

contato.prototype.validate = function (e) {
    const el = e.target;

    const nomeInput = el.querySelector('input[name="nome"')
    const emailInput = el.querySelector('input[name="email"')
    const telefoneInput = el.querySelector('input[name="telefone"')

    let errors = false;
    let errorsInputs = [];

    if (!nomeInput.value) {
        errorsInputs.push('Nome é obrigatorio!')
        errors = true
    }
    if (!emailInput.value && !telefoneInput.value) {
        errorsInputs.push('Por favor digite email ou telefone do contato!')
        errors = true
    }
    if (emailInput.value && !validator.isEmail(emailInput.value)) {
        errorsInputs.push('Email inválidoo!')
        errors = true
    }
    if (errorsInputs.length > 0) {
        const message = document.querySelector('#messagesValida');
        const div = document.createElement('div');

        message.innerHTML = '';
        div.className = 'alert alert-danger'

        errorsInputs.forEach( e => {
            div.innerHTML += `${e} <br>`
        });
        message.appendChild(div)
    }

    if (!errors) el.submit()
}