// function criasoma(x) {
//     function soma(y) {
//         return x + y
//     }
//     return soma
// }

// const soma = criasoma(5)
// console.log(soma(10)) // 15

///////////////////////////////////////////

// function criaFrase(comeco) {
//     function frase(fim) {
//         return comeco + ' ' + fim
//     }
//     return frase 
// }

// const frase = criaFrase('Eu gosto de')
// console.log(frase('programar')) // "Eu gosto de programar"
// console.log(frase('JavaScript')) // "Eu gosto de JavaScript"

///////////////////////////////////////////

// function criaCalculadora(valor) {
//     return {
//         somar: function(params) {
//             return valor + params
//         },
//         subtrair: function(params) {
//             return valor - params
//         },
//         multiplicar: function(params) {
//             return valor * params 
//         },
//     }
// }

// const calc = criaCalculadora(10)
// console.log(calc.somar(5))      // 15
// console.log(calc.subtrair(3))   // 7
// console.log(calc.multiplicar(4)) // 40

///////////////////////////////////////////

function criaContador() {
    let box = 0
    
    function contador() {
        return box += 1
    }
    return contador
}

const contador = criaContador()
console.log(contador()) // 1
console.log(contador()) // 2
console.log(contador()) // 3
