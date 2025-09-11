function criaSegundos(segundos) {

    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: `GMT`
    })
}

console.log(criaSegundos(10))


let iniciar = document.querySelector(`#iniciar`)
let pausar = document.querySelector(`#pausar`)
let zerar = document.querySelector(`#zerar`)
let relogio = document.querySelector(`#timer`)

let segundos = 0;
let timer;

function iniciarRelogio() {

    clearInterval(timer)

    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = criaSegundos(segundos)
        relogio.style.color = 'black'
    }, 1000);
    return timer
}

function pausarRelogio() {
    setTimeout(() => {

        clearInterval(timer)
        relogio.style.color = 'red'
    }, 0);
}

function zerarRelogio() {
    setTimeout(() => {
        clearInterval(timer)
        segundos = 0
        relogio.style.color = 'black'
        return relogio.innerHTML = `00:00:00`
    }, 0);
}

iniciar.addEventListener('click', function () {
    iniciarRelogio()
})

pausar.addEventListener('click', function () {
    pausarRelogio()
})

zerar.addEventListener('click', function () {
    zerarRelogio()
})