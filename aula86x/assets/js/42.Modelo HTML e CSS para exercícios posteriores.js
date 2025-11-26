class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('#formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => { // arrow não perde o this
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if (camposValidos && senhasValidas) {
            alert('Formulario enviado.')
            this.formulario.submit()
        }
    }

    camposSaoValidos() {

        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }   

        for (let campo of this.formulario.querySelectorAll('.validar')) {
  
            if (!campo.value) { 
                this.createError(campo, `${campo.name} está em branco.`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }

        }
        return valid;
    } 

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()) {
            this.createError(campo, 'cpf invalido')
        }
        return false;
    }
    senhasSaoValidas() {
        let valid = true 
        
        const senha = this.formulario.querySelector('.senha')
        const repetirsenha = this.formulario.querySelector('.repetirSenha')

        if (senha.value !== repetirsenha.value) {
            this.createError(senha, 'Senhas não são iguais.')
            this.createError(repetirsenha, 'Senhas não são iguais.')
            valid = false
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            this.createError(senha, 'Senha precisa ter entre 6 e 12 caracteres')
            this.createError(repetirsenha, 'Senha precisa ter entre 6 e 12 caracteres')
            valid =  false;
        }

        return valid
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true
        if(usuario.length < 3 || usuario.length > 12) {
            this.createError(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
            valid =  false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(campo, 'Usuário precisa conter apenas letras ou numeros.')
            valid = false;
        }

        return valid;
    }


    createError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

}

const valida = new ValidaFormulario();
// valida.eventos()
