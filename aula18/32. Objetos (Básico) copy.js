let nomes = []

let usuario1 = {
    nome: 'Gabriel',
    sobrenome: 'Silva',
    idade: 22
}
let usuario2 = {
    nome: 'Tiago',
    sobrenome: 'Sousa',
    idade: 27
}
let usuario3 = {
    nome: 'Luiz',
    sobrenome: 'Mendes',
    idade: 30    
}

nomes.push(usuario1,usuario2,usuario3)
console.log(nomes)
nomes[0].nome = 'Biel'
nomes[0].sobrenome = 'Alves'
nomes[0].idade = '29'

nomes.pop()
nomes.unshift({    
    nome: 'Ramon',
    sobrenome: 'Silva',
    idade: 27})
console.log(nomes)