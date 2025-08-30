/* // FOR ( ;  ; ) COMUM

const frutas = ['Pera','Maça','Uva']
for (i = 0 ; i < frutas.length ; i++) {
    console.log(frutas[i])
}
    
// FOR ( IN )-> LER INDICE OU CHAVES DO OBJETO
/ ARRAY
const frutas = ['Pera','Maça','Uva']
for (let indice in frutas) {
console.log(frutas[indice]) // IRAR FUNCIONAR IGUAL O CODIGO ACIMA / Pera Maça Uva
}

/OBJETO
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Carvalho',
    idade: 22
}
/ DUAS MANEIRAS DE ACESSAR UM VALOR DE UM OBJETO    
console.log(pessoa.nome)
console.log(pessoa['nome'])


*/
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Carvalho',
    idade: 22
}

for (indice in pessoa) {
    console.log(indice, pessoa[indice]) // DENTRO DE FOR NÃO É NECESSARIO O USO DE ASPAS PARA VER O VALOR DO OBJETO 
}

console.log(indice, pessoa['nome'])