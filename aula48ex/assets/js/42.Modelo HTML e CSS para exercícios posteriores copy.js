

const inputTarefas = document.querySelector('#inputTxt')
const tarefas = document.querySelector('#tarefas')
const botaoAdicionar = document.querySelector('#btAdicionar')

function criarBotaoExcluir() {
    let botao = document.createElement('button')
    botao.classList = 'excluir'
    botao.innerText = 'excluir'
    return botao
}

document.addEventListener('click', function (p) {
    const excluir = p.target
    
    if (excluir.classList.contains('excluir')) {
        excluir.parentElement.remove()
        salvarTarefas()
    }

})

function salvarTarefas() {
    const tarefasLi = document.querySelectorAll('li')
    const arrayLi = []

    for (let tarefas of tarefasLi) {
        let tarefaValue = tarefas.innerText;
        tarefaValue = tarefaValue.replace('excluir','')
        arrayLi.push(tarefaValue)
    }
    const arrayJson = JSON.stringify(arrayLi)
    localStorage.setItem('tarefas', arrayJson) 
}

function trazerLiArray() {
    let arraylocal = localStorage.getItem('tarefas')
    if (!arraylocal) return

    let array = JSON.parse(arraylocal)

    for (let tarefas of array) {
        criarTarefas(tarefas)
    }
}

trazerLiArray()

function criarli() {
    const li = document.createElement('li')
    return li
}  


function criarTarefas(text = null) {
    if (!text) return;

    limparInput()
    let li = criarli();
    let botaoExcluir = criarBotaoExcluir()

    li.innerHTML = text
    li.appendChild(botaoExcluir)
    tarefas.appendChild(li);
    salvarTarefas()
}


inputTarefas.addEventListener('keypress', function (p) {

    if (p.keyCode === 13) {
        criarTarefas(inputTarefas.value)
    }    
})

botaoAdicionar.addEventListener('click', function () {
    criarTarefas(inputTarefas.value)
})



function limparInput() {
    inputTarefas.value = ''
    inputTarefas.focus()
}