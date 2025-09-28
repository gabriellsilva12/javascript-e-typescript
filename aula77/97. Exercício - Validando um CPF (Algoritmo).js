// 
/*389.148.871-89
 
     3  8  9  1  4  8  8  7  1 
    10  9  8  7  6  5  4  3  2
     3  8  9  1  4  8  8  7  1  8
    11 10  9  8  7  6  5  4  3  2
 
    11 - (resto % 11) = 

*/

// let cpf = '389.148.871-89'

cpf = cpf.replace(/\D+/g, '')
cpf = cpf.slice(0, -2)
cpf = Array.from(cpf)

const rsReduce = funcaoReduce()
let valor1 = String(11 - (rsReduce % 11))
cpf.push(valor1)

let valor2 = String(11 - (funcaoReduce(true) % 11))
const resultadoFinal = valor1 += valor2
console.log(resultadoFinal)

function funcaoReduce(valor) {
    let valorfinal = 10
    if (valor) valorfinal = 11 
    const rs = cpf.reduce(function( ac, val, ind, arr) {
        ac += val * valorfinal
        console.log( val, valorfinal, '=', ac)
        valorfinal--
        return ac 
    }, 0)
    return rs
}

// funcaoReduce()