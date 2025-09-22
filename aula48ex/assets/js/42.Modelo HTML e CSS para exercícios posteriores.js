const textoInput = document.querySelector('#inputTxt')
const botaoAdicionar = document.querySelector('#btAdicionar')
const divTarefas = document.querySelector('#tarefas')

textoInput.addEventListener('keypress', function (p) {    
    if (p.keyCode == 13) {
        criaTarefas(textoInput.value)
    }
})
botaoAdicionar.addEventListener('click',function () {
    criaTarefas(textoInput.value)
})

function criarBotaoExcluir() {
    let botao = document.createElement('button')
    botao.innerHTML = 'excluir'
    botao.classList = 'excluir'
    return botao
}
document.addEventListener('click', function (p) {
    const excluir = p.target;

    if (excluir.classList.contains('excluir')) {
        excluir.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const tarefasLi = document.querySelectorAll('li')
    const arrayLi = []

    for (let tarefas of tarefasLi) {
        let textoTarefas = tarefas.innerText;
        textoTarefas = textoTarefas.replace('excluir','');
        arrayLi.push(textoTarefas)
    }
    // console.log(arrayLi);
    const arrayJson = JSON.stringify(arrayLi)
    localStorage.setItem('tarefas', arrayJson)
    // console.log(arrayJson);
}

function trazerStorage() {
    const arrayJson = localStorage.getItem('tarefas')
    const array = JSON.parse(arrayJson)

    for (let tarefas of array) {
        criaTarefas(tarefas)
    }
}
trazerStorage()

function criarLi() {
    const li = document.createElement('li')
    return li
}

function criaTarefas(text) {
    if (!text) return

    const li = criarLi()
    const botao = criarBotaoExcluir()

    li.innerHTML = text
    li.appendChild(botao)
    divTarefas.appendChild(li)
    salvarTarefas()
}