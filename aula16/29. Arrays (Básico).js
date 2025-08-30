/* ARRAYS

// ADICONAR VALORES AO FINAL DE UM ARRAY COM .PUSH()
const alunos = [`gabriel`, `luiza`, `joão`]
alunos.push(`luiz`)


// ADICIONAR VALORES AO COMEÇO COM USANDO .UNSHIFT
const alunos = [`gabriel`, `luiza`, `joão`]
alunos.unshift('ygor') // IRAR ADICIONAR YGOR NO COMEÇO DO ARRAY
alunos.unshift('fabio') // IRAR ADICIONAR FABIO E DEPOIS YGOR
console.log(alunos)

// REMOVER VALORES DO FINAL DE UM ARRAY COM .POP
const alunos = [`gabriel`, `luiza`, `joão`]
let removido = alunos.pop(); // AQUI ELE REMOVERA O ULTIMO INDICE DE UM ARRAY
console.log(alunos)


// REMOVER VALORES DO COMEÇO DE UM ARRAY COM .SHIFT
const alunos = [`gabriel`, `luiza`, `joão`]
let removido = alunos.shift(); // AQUI ELE REMOVERA O PRIMEIRO INDICE DE UM ARRAY
console.log(alunos)


// REMOVER VALORES USANDO .DELETE, MAS O ESPAÇO LIMPO IRAR FICAR EM BRANCO
const alunos = [`gabriel`, `luiza`, `joão`]
delete alunos[1]; // AQUI ELE REMOVERA INDICE DE UM ARRAY
console.log(alunos)


// MOSTRAR VALORES DE UM ARRAY USANDO ALUNO[INDICE DO VALOR]
const alunos = [`gabriel`, `luiza`, `joão`]
console.log(alunos[1]) / mostrara o nome luiza


// ADICONANDO VALORES DENTRO DE UM ARRAY ESPECIFICO COM ARRAY[INDICE]
const alunos = [`gabriel`, `luiza`, `joão`]
alunos[3] = 'joão' / IRAR ADICIONAR 'JOÃO' NO INDICE 3 DO ARRAY
alunos[1] = 'Mario' / AQUI ELE JA IRA ALTERAR


// SABER TAMANHO DO ARRAY COM .LENGTH
const alunos = [`gabriel`, `luiza`, `joão`]
console.log(alunos.length)


// SABER TIPOS DE VALORES USANDO .TYPEOF
const alunos = [`gabriel`, `luiza`, `joão`]
console.log(typeof alunos)


/ SABER O TIPO DE ARRAY, jA QUE TYPEOF NÃO FUNCIONA
const alunos = [`gabriel`, `luiza`, `joão`]
console.log(alunos instanceof Array)



// 
*/


const alunos = [`gabriel`, `luiza`, `joão`]
alunos.push(`luiz`)
console.log(alunos.leg)