// CONSTRUTORA <- MOLDE( CLASSE ) QUE VAI GERAR NOVOS OBJETOS
// O QUE SÃO PROTOTYPES? PROTOTYPE É UM OBJETO DE HERANÇA QUE O JAVASCRIPT USA PARA PROCURAR PROPRIEDADES QUANDO ELAS NÃO EXISTEM NO OBJETO

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() { 
    return this.nome + ' ' + this.sobrenome 
} 

// INSTÂNCIA
const p1 = new Pessoa('Gabriel', 'Silva')
const p2 = new Pessoa('Luiz', 'Otavio')

console.dir(p1)
console.dir(p2)