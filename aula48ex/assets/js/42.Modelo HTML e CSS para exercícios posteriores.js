const inputTarefas = document.querySelector('#inputTxt')
const tarefas = document.querySelector('#tarefas')
const botaoAdicionar = document.querySelector('#btAdicionar')


function criarBotao() {
    const botao = document.createElement('button')
    botao.innerHTML = 'excluir'
    botao.classList = 'excluir'
    return botao
}

function limparInput() {
    inputTarefas.value = ''
    inputTarefas.focus()
}

function criarLi() {
    const li = document.createElement('li')
    return li
}

function criarTextoLi() {
    let tarefasTxt = inputTarefas

    tarefasTxt = tarefasTxt.value
    return tarefasTxt
}

function salvarTarefas() {
    let liTarefas = tarefas.querySelectorAll('li')
    let arrayLi = []

    for (let tarefas of liTarefas ){

        let txtTarefas = tarefas.innerText
        txtTarefas = txtTarefas.replace('excluir','')
        arrayLi.push(txtTarefas)   
    }
    
    // console.log(arrayLi)     
    let arrayJson = JSON.stringify(arrayLi)
    localStorage.setItem('tarefas', arrayJson)
    // console.log(arrayJson)

}

function trazerTarefas() {
    let array = localStorage.getItem('tarefas')
    // if (!array) return
    const listaTarefas = JSON.parse(array)

    for (let tarefa of listaTarefas) {
        criarTarefas(tarefa)
    }
}
trazerTarefas()

function criarTarefas(text) {
    const txtTarefas = text || criarTextoLi()
    if (!txtTarefas) return
    limparInput()

    const li = criarLi()
    const botaoExcluir = criarBotao()

    li.innerText = txtTarefas
    li.appendChild(botaoExcluir)
    tarefas.appendChild(li)
    salvarTarefas()

}
document.addEventListener('click', function (p) {
    const botaoExcluir = p.target
    if (botaoExcluir.classList.contains('excluir')) {
        botaoExcluir.parentElement.remove()
        salvarTarefas()
    }

})



botaoAdicionar.addEventListener('click', function () {
    criarTarefas()
})

document.addEventListener('keypress', function (p) {

    if (p.keyCode === 13) {
        criarTarefas()
    }
})
