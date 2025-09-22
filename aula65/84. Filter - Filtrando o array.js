// FILTER - FILTRANDO ARRAY
/* O QUE É .FILTER() E COMO ELE FUNCIONA? FILTER É UM MÉTODO QUE PERCORRE UM ARRAY, FILTRA ESSE ARRAY DE ACORDO COM A CONDIÇÃO QUE LHE FOI PASSADA E SE ESSA CONDIÇÃO FOR TRUE, CRIA UM NOVO ARRAY COM OS VALORES QUE FORAM FILTRADOS. O ARRAY ORIGINAL NÃO É MODIFICADO.


• FILTER PARAMETROS.
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]

    callback = (valor, indice, array) => valor > 10 // A CONDIÇÃO (valor > 10) SO IRA ME RETORNA OS VALORES QUE FOREM TRUE.
    const numeros10 = numeros.filter(callback)   // FILTER SEMPRE ME PASSARA COMO PARAMETROS PRIMEIRO O VALOR DO ARRAY, DEPOIS O INDICE E POR ULTIMO O ARRAY COMPLETO.

• MODO DE UTILIZAR.
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]

    • function normal
    const numerosM = numeros.filter( function( valor , indice, arrayCompleto ) {
        return valor >= 50 // AQUI ELE SÓ ME RETORNARA SE A CONDIÇÃO FOR TRUE, NO CASO OS NUMEROS MAIORES QUE 50.
    })

    • arrow function
    const numerosM = numeros.filter( valor => valor > 10)

*/

const pessoas = [
    {nome: 'Gabriel', idade: 22},
    {nome: 'Tiago', idade: 27},
    {nome: 'Luiza', idade: 56},
    {nome: 'Wallace', idade: 55},
    {nome: 'Let', idade: 29},
    {nome: 'Rosana', idade: 33}
]

const pesssoasNomeTamanho = pessoas.filter(nomes => nomes.nome.length >= 6)
const pessoasIdade = pessoas.filter(nomes => nomes.idade > 50)
// const pessoasNomeA = pessoas.filter(nomes => nomes.nome.slice(-1) == 'a') 
const pessoasNomeA = pessoas.filter(nomes => nomes.nome.toLowerCase().endsWith('a') )
console.log(pesssoasNomeTamanho)
console.log(pessoasIdade)
console.log(pessoasNomeA)

