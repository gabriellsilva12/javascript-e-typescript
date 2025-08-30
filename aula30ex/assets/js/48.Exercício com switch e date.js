/* 
const h1 = document.querySelector('.container h1')
let date = new Date();;

function criaDataCompleta() {

    let diasemana = date.getDay();
    let mess = date.getMonth();
    let day = date.getDate()
    let ano = date.getFullYear()
    let hora = date.getHours()
    let minutos = date.getMinutes()

    let dia = criaDia(diasemana);
    let mes = criaMes(mess);

    hora < 10 ? hora = '0' + hora : hora
    minutos < 10 ? minutos = '0' + minutos : minutos

    return `${dia}, ${day} de ${mes} de ${ano}, ${hora}:${minutos}`

}


function criaMes(mes) {

    mes === 0 ? mes = 'Janeiro' : mes
    mes === 1 ? mes = 'Fevereiro' : mes
    mes === 2 ? mes = 'Março' : mes
    mes === 3 ? mes = 'Abril' : mes
    mes === 4 ? mes = 'Maio' : mes
    mes === 5 ? mes = 'Junho' : mes
    mes === 6 ? mes = 'Julho' : mes
    mes === 7 ? mes = 'Agosto' : mes
    mes === 8 ? mes = 'Setembro' : mes
    mes === 9 ? mes = 'Outubro' : mes
    mes === 10 ? mes = 'Novembro' : mes
    mes === 11 ? mes = 'Dezembro' : mes

    return mes
}

function criaDia(date) {

    switch (date) {
        case 0:
            date = 'Domingo'

            break // BREAK É ESSENCIAL NO SWITCH, POIS APOS ACHAR O VALOR ELE SAI DO BLOCO
        case 1:
            date = 'Segunda-feira'

            break
        case 2:
            date = 'Terça-feira'

            break
        case 3:
            date = 'Quarta-feira'

            break
        case 4:
            date = 'Quinta-feira'

            break
        case 5:
            date = 'Sexta-feira'

            break
        case 6:
            date = 'Sábado'
            break

    }
    return date
}



h1.innerHTML = `${criaDataCompleta()}`



// SEGUNDA OPÇÃO DE FAZER

let h1 = document.querySelector('.container h1')
let date = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

h1.innerHTML = date.toLocaleDateString('pt-BR', options); 


// TERCEIRA OPÇÃO DE FAZER


let h1 = document.querySelector('.container h1')
let date = new Date();



h1.innerHTML = date.toLocaleDateString('pt-BR', options = {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
});
*/  