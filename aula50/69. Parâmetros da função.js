/* ARGUMENTS
O QUE É ARRGUMENTS? É UM OBJETO QUE O JS CRIA AUTOMATICAMENTE E QUE GUARDA TODOS OS ARGUMENTOS( VALORES ) QUE SÀO PASSADOS PARA A FUNÇÃO
OBS: ARGUMENTS SO PODEM SER USADOS EM FUNÇÕES NORMAIS NÃO EM ARROW FUNCTION

function funcao() { // os parametros irão receber os argumentos enviandos quando a função for chamada
    // console.log('ólaaaa', arguments)
    const array = []
    for (let valores of arguments) {
        
        array.push(valores)
    } 
    
}
funcao('valor', 1,2,3,4,5,6,7,8) // argumentos são os valores enviados para os parametros


// UNDEFINED EM PARAMETRO
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c)
}
funcao(2, undefined, 20) // o undefined esta nesse momento enviando um valor vazio, entào quando chegar no parametrro da funcao b recebera 2

// ATRIBUIÇÀO VIA DESESTRUTURAÇÀO EM PARAMETRO
const obj = {nome: 'Gabriel',sobrenome: 'Carvalho',idade: '22'} // function funcao({nome, sobrenome, idade}) 
const array = ['Gabriel' ,'sobrenome' ,22] // function funcao([nome, sobrenome, idade])

function funcao([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade)
}
funcao(array) 
*/


function funcao(operador, acumulador, ...numeros) { // usando rest para pegar todos os numeros restantes, no caso 1,2,3
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}
funcao('+', 0, 1, 2, 3) 


