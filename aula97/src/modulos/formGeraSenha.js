import geraSenha from './geradores.js'

const qtd = document.querySelector('#numeroinput')
const numeros = document.querySelector('#numeros')
const simbolos = document.querySelector('#simbolos')
const maiusculas = document.querySelector('#maisculas')
const minusculas = document.querySelector('#minusculas')
const button = document.querySelector('#button')
const senha = document.querySelector('.senha')

export default () => {
    button.addEventListener('click', () => {
        const s = gera()
        senha.innerHTML = s
    }) 
};


function gera() {
    const senha = geraSenha(
        qtd.value,
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolos.checked
    ) 
    return senha || 'Nada selecionado.';
}