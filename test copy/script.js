const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const email = document.querySelector('#email')
const alerta = document.querySelector('#alerta')
const divLogin = document.querySelector('#login')

const botaoLogin = document.querySelector('#botaoLogin')

function criarAlert() {
    alerta.innerHTML = ''

    let p = document.createElement('p')
    p.style.color = 'red'
    p.style.fontWeight = '700'
    p.innerHTML = 'Usuario ja cadastrado, tente novamente.'
    return p
}


function salvarDados() {
    const dados = verificarDados()

    let {nome, sobrenome, email} = dados

    const dadosArray = []
    dadosArray.push(nome,sobrenome,email)

    const arrayJson = JSON.stringify(dadosArray)
    localStorage.setItem(`${criarNovosUsuarios()}`, arrayJson)
}

function criarNovosUsuarios() {
    const numberUser = Math.round(Math.random() * 10)
    const user = numberUser
    return user
}

function verificarUsuarios() {
    const users = []

    for (c = 0 ; c <= 10; c++) {
        const userslc = localStorage.getItem(`${c}`)
        if (userslc) {
            const arrayJson = JSON.parse(userslc)

            users.push(arrayJson)
        }
    }
    return users
}

dadosLocalStorage()

function dadosLocalStorage() {

    const user = verificarUsuarios()
    const [name,sobrename] = user 
    console.log(name, sobrename)
    
    for (let c = 0 ; c <= 3; c++) {
        


    }

    // const [ nome ] = user 
    
    // console.log(nome,sobrenome,email)




    // const arraylocal = verificarUsuarios()
    // if (!arraylocal) return 

    // const users = []
    
    // users.push(arraylocal)
    // // // console.log(nomeS, sobrenomeS, emailS)
    // console.log(nomeS)
    
    // if (user === nome.value && user === sobrenome.value && user === email.value) {
    //     alert('[ERRO] Usuario ja cadastrado')
    //     let p = criarAlert()
    //     alerta.appendChild(p)
    // }
}

function verificarDados() {
    if (!nome.value || !sobrenome.value || !email.value) {
        alert('[ERRO] Dados invalidos, informações em branco.')
        // criarAlert()
    } else {
        return {
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value
        }
    }
}




// dadosLocalStorage()


nome.addEventListener('keypress', function (p) {
    if (p.keyCode === 13) {
        if(!nome.value) return
        
        sobrenome.focus() 
    }  
})
sobrenome.addEventListener('keypress', function (p) {
    if (p.keyCode === 13) { 
        if(!sobrenome.value) return
        
        email.focus() 
    }
})
email.addEventListener('keypress', function (p) {
    if (p.keyCode === 13) { 
        
        verificarDados()
        salvarDados()
        // dadosLocalStorage()
    }
})

botaoLogin.addEventListener('click', function () {
    
    verificarDados()
    salvarDados()
    // dadosLocalStorage()
})