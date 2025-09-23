
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]

const numeroPares = numeros
    .filter(valor => valor % 2 === 0) // retorna valores pares
    .map(valor => valor * 2) // multiplica valores por 2
    .reduce((acumulador, valor) => acumulador + valor) // soma todos o valores multiplicadod

console.log(numeroPares) // 324