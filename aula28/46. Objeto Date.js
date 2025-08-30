/* 01 / 01 / 1970 EPOCA UNIX OU TIMESTAMP UNIX
const data = new Date(0) 


// EXPLICANDO HORAS EM JAVASCRIPT 
new Date( 2025 = ANO, 3 = MÊS, 20 = DIA, 15 = HORA, 14 = MINUTOS, 27 = SEGUNDOS, 999 = MILESSIMO DE SEGUNDO ) 


// OUTRA MANEIRA DE MOSTRAR O DIA 
const data = new Date('2019-04-2020 20:20:59') 


// HORA PADÃRO EUROPEU 
console.log( data.toString())
Sat Aug 23 2025 20:44:05 GMT-0300 (Horário Padrão de Brasília)


// DATA DO MARCO ZERO(1970) ATE A SUA DATA ATUAL
console.log('Ano', Date.now())


const data = new Date() 
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('Segundos', data.getSeconds())
console.log('Milisegundos', data.getMilliseconds()) // MILISEGUNDOS A CONTAGEM SO VAI ATE 999, 1000 VIRA MINUTO
console.log('Dia Da Semana' , data.getDay()) // DIA DA SEMANA COMEÇA DO ZERO TAMBEM / 9 - DOMINGO, 6 - SABADO   
console.log('Dia', data.getDate()) 
console.log('Mês', data.getMonth()) // MES COMEÇA DO ZERO
console.log('Ano', data.getFullYear())
*/ 

function zeroAEsquerda(num) {
    return num < 10 ? '0' + num : num
}

function formData(d) {

   let dia = zeroAEsquerda(d.getDate())
   let mes = zeroAEsquerda(d.getMonth() + 1)
   let ano = zeroAEsquerda(d.getFullYear())
   let hora = zeroAEsquerda(d.getHours())
   let minutos = zeroAEsquerda(d.getMinutes())
   let segundos = zeroAEsquerda(d.getSeconds())

    // dia < 10 ? dia = '0' + dia : dia
    // mes < 10 ? mes = '0' + mes : mes
    // hora < 10 ? hora = '0' + hora : hora
    // minutos < 10 ? minutos = '0' + minutos : minutos
    // segundos < 10 ? segundos = '0' + segundos : segundos

    return `${dia} / ${mes} / ${ano}  ${hora} : ${minutos} : ${segundos}`
}

let data = new Date()
let dataBrasil = formData(data)
console.log(dataBrasil)