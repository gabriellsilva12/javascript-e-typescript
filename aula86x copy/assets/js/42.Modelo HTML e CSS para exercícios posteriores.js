
class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('#formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let inputs = this.verificaInputs()
        let senhas = this.verificaSenhas()
        if (inputs && senhas) {
            alert('Formulario enviado.')
        }
    }

    verificaInputs() {
        let flagValida = true;
        this.errorText()
        if (!this.inputsVazios()) flagValida = false;
        if (!this.inputsCPF()) flagValida = false;
        return flagValida
    }

    verificaSenhas() {
        let flagSenha = true;
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetirSenha')
        if (senha.value !== repetirSenha.value) {
            this.messageError(senha, 'Senhas precisam ser iguais.')
            flagSenha = false
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.messageError(senha, 'Senha precisa ter entre 6 e 12 caracteres.')
            flagSenha = false
        }
        return flagSenha
    }

    errorText() {
        for (let erroText of this.formulario.querySelectorAll('.erro')) {
            erroText.remove()
        }
    }
 
    inputsVazios() {
        let inputsFlag = true;

        for (let inputs of this.formulario.querySelectorAll('.validar')) {
            if (!inputs.value) {
                this.messageError(inputs, 'Nenhum campo pode estar vazio.');
                inputsFlag = false;
            }
            if (inputs.classList.contains('usuario')) {
                if(inputs.value.length < 3 || inputs.value.length > 12) {
                    this.messageError(inputs, 'Usúario devera ter entre 3 e 12 caracteres')
                    inputsFlag = false
                }
                if(!inputs.value.match(/^[a-zA-Z0-9]+$/g)) {
                    this.messageError(inputs, 'Usuário só podera conter letras e números');
                    inputsFlag = false;
                }
            }
        }
        return inputsFlag
    }

    inputsCPF() {
        let flagCPF = true;
        const cpfForm = this.formulario.querySelector('.cpf')
        const cpf = new ValidaCPF(cpfForm.value)

        if(!cpf.valida()) {
            console.log('ddddddddd')

            this.messageError(cpfForm, 'cpf inválido.')
            flagCPF = false
        }

        return flagCPF
    }

    messageError(input, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('erro')
        input.insertAdjacentElement('afterend', div)
    }
}


const valida = new ValidaFormulario()