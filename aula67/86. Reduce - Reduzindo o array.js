// REDUCE
// O QUE É REDUCE? REDUCE É UM MÉTODO QUE SEREVE PARA REDUZIR UM ARRAY A UM UNICO RESULTADO( OBJETO, STRING E ETC. )
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce( function( acumulador, valor, indice, array ) {
//     acumulador += valor
//     console.log(acumulador , valor)
//     return acumulador
// }, 0) 



const pessoas = [
    {nome: 'Gabriel', idade: 22},
    {nome: 'Tiago', idade: 27},
    {nome: 'Luiza', idade: 56},
    {nome: 'Wallace', idade: 55},
    {nome: 'Let', idade: 29},
    {nome: 'Rosana', idade: 33}
]

const pessoaVelha = pessoas.reduce( function(acumulador, valor) {
    console.log(acumulador, valor);
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(pessoaVelha)