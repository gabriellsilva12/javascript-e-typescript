//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO COM OBJETOS

// const pessoa = {
//     nome: 'Gabriel',
//     sobrenome: 'Carvalho',
//     idade: 22,
//     endereço: {
//         rua: '4 rua',
//         numero: 44
//     }
// }
/*

const {nome, sobrenome } = pessoa   // AQUI TEMOS A MANEIRA COMUM DE ATRIBUIR UMA NOVA VARIAVEL VIA DESESTRUTURAÇÃO, USANDO O NOME DA PROPRIAS VARIAVEIS, OBS: AS NOVAS VARIAVEIS TERAN OS MESMOS NOMES QUE ESTA DENTRO DO OBJETO

const {nome: novoNome, sobrenome:  novoSobrenome} = pessoa   // AQUI ESTAMOS CRIANDO NOVOS NOMES PARAS AS VARIAVEIS QUE SERÀÒ ATRIBUIDAS COM O { nome: novoNome }

const {endereço: {rua: novaRua, numero: novoNumero } } = pessoa


const { nome, ...rest } = pessoa; // AQUI ASSIM COMO NOS ARRAYS, ESTOU UTILIZANDO O ...REST PARA PEGAR TODOS OS VALORES QUE RESTÃO NO OBJETO.

*/
const pessoas = [
    {
        nome: 'Gabriel',
        sobrenome: 'Carvalho',
        idade: 22,
    }, 
    {
        nome: 'Tiago',
        sobrenome: 'Sousa',
        idade: [111,222,33],

    }, 
    {
        nome: 'Ramon',
        sobrenome: 'Mendes',
        idade: 30,
    }
]

const [,{ idade:[,novonome] }] = pessoas;


console.log(novonome)