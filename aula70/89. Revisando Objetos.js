// const pessoa = {
//     nome: 'Gabriel',
//     sobrenome: 'Silva'
// }

// // MANEIRAS DE ACESSAR O OBJETO
// const chave = 'nome'
// console.log(pessoa[chave])

// console.log(pessoa.nome)

// console.log(pessoa['nome'])

// CRIANDO OBJETO COM NEW 
// const pessoa1 = new Object()
// pessoa1.nome = 'Gabriel';
// pessoa1.sobrenome = 'Silva';

// DELETAR CHAVE DO OBJETO 
// const pessoa1 = new Object()
// pessoa1.nome = 'Gabriel';
// pessoa1.sobrenome = 'Silva';
// pessoa1.falar = 'olaaaa' // ADICIONOU A CHAVE NOME COM O VALOR 'OLAAA' NO OBJETO PESSOA.
// delete pessoa1.nome 
// console.log(pessoa1) // { sobrenome: 'Silva' }




// const pessoa1 = new Object()
// pessoa1.nome = 'Gabriel';
// pessoa1.sobrenome = 'Silva';
// pessoa1.idade = 22;
// pessoa1.fala = function() {
//     return (`${this.nome} está falando seu nome.`)
// }
// pessoa1.getNascimento = function () {
//     let data = new Date()
//     return data.getFullYear() - this.idade;
// }
// console.log(pessoa1.getNascimento()) // { sobrenome: 'Silva' }



function Pessoa(nome, sobrenome) {

    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this) // dessa maneira nenhum objeto dessa função pode ser alterado ou incrementado.
};



const pessoa1 = new Pessoa('Gabriel', 'silva')
pessoa1.nomee = 'luiz' 
Object.freeze(pessoa1) // TRAVEI O MEU OBJETO PARA NÃO SER MAIS ALTERADO.
console.log(pessoa1)




