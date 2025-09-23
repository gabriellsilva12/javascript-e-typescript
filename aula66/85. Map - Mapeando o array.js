// MAP = MAPEANDO ARRAY
/* O QUE É MAP? MAP ASSIM COMO FILTER É UM MÉTODO QUE CRIA UM NOVO ARRAY, ELE PEGA ESSE NOVO ARRAY MODIFICA DE ACORDO COM O QUE VOCÊ DEFINIU E RETORNA UM NOVO ARRAY MODIFICADO( ARRAY ORIGINAL CONTINUA SEM ALTERAÇÃO ).

• COMO USAR
    const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
    const numerosDobrados = numeros.map( function( valor, indice, array ) { // ASSIM COMO FILTER ELE PEGA VALOR,INDICE E ARRAY.
        return valor * 2
    })
    console.log(numerosDobrados) // [ 10, 100, 160, 2,  4, 6, 10, 16, 14, 22, 44, 54 ]
*/


// DOBRE OS VALORES    
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
const numerosDobrados = numeros.map( valor => valor * 2 )

// console.log(numerosDobrados)
    
const pessoas = [
    {nome: 'Gabriel', idade: 22},
    {nome: 'Tiago', idade: 27},
    {nome: 'Luiza', idade: 56},
    {nome: 'Wallace', idade: 55},
    {nome: 'Let', idade: 29},
    {nome: 'Rosana', idade: 33}
]
// PARA CADA:
// RETORNE APENAS UMA STRING COM O NOME DA PESSOA
const nomePessoas = pessoas.map( nome => nome.nome )
// console.log(nomePessoas)

// REMOVA APENAS A CHAVE NOME DO OBJETO
/* •1 MANEIRA 
    const nomeObj = pessoas.map( function(valor) {
        let newObj = {...valor} // REST OPERATOR 
        delete newObj.nome // SE EU USASSE O DELETE DIRETO NO PARAMETRO VALOR ELE IRIA MODIFICAR DIRETAMENTE TAMBEM O VALOR DO MEU ARRAY.
        return newObj
    })
    console.log(nomeObj) 

    •2 MANEIRA 
    const nomeObj = pessoas.map( function(valor) {
        return {idade: valor.idade}
    })    
        
*/ 
// ADICIONE UMA CHAVE ID EM CADA OBJETO
const idPessoas = pessoas.map(function(valor, id) {
    let nValor = {...valor}
    nValor.id = id
    return nValor
})

console.log(pessoas)
console.log(idPessoas)

