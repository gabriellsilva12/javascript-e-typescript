let enviar = document.querySelector(`#enviar`)
enviar.addEventListener("click", botaoEnviar)
window.usuarios = []

function botaoEnviar(){
    
    let nome = document.querySelector(`#nome`).value
    let sobrenome = document.querySelector(`#sobrenome`).value
    let peso = document.querySelector(`#peso`)
    let altura = document.querySelector(`#altura`)
    let res = document.querySelector(`#res`)
    
    let alturan = Number(altura.value)
    let peson = Number(peso.value)

    let novosUsuario = {
        nome,sobrenome,peson,alturan
    }   

    usuarios.push(novosUsuario)

    console.log(usuarios)

    res.innerHTML += `<p>Nome: ${nome} <br> Sobrenome: ${sobrenome} <br> Peso: ${peson} Kg <br> Altura: ${alturan.toFixed(2)} <br>`
}

