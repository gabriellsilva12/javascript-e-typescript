// FUNCAO RETURN
// RETORNA UM VALOR E TUDO QUE ESTIVER ABAIXO DO RETURN NÃO SERA EXECUTADO.

// function soma(a, b) {
//     return a + b
// }
// function falaFrase(comeco) { // AQUI ESTOU RECEBENDO 'OLAAAA' COMO PARAMETRO
//     function falaResto(resto) { // AQUI ESTOU RECEBENDO 'MUNDO' COMO PARAMETRO
//         return comeco + ' ' + resto 
//     }
//     return falaResto // AQUI IRA RETORNA UMA FUNCÃO QUE PODERA SER USADO EM OUTRO LUGAR
// }

// const olamundo = falaFrase('ólaaa') // AQUI ESTOU PASSANDO O ARGUMENTO PARA falaFrase E MANDANDO A FUNCÃO falaResto PARA CONST olamundo

// console.log(olamundo('mundo')) // AQUI ESTOU O ARGUMENTO PARA olamundo QUE RECEBEU A FUNÇÃO RESTO.

function criaMultiplica(n) {
    function duplica() {
        return n * 2      
    }
};