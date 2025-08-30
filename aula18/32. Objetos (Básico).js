
// USANDO FUNCTIONS PARA CRIAR OBJETOS
// function pessoa(nome,sobreNome, idade) {
//     return { nome, sobreNome, idade }
// }
// const pessoa1 = pessoa('gabriel', 'Carvalho', 22)
// const pessoa2 = pessoa('Luiz', 'Silva', 44)
// const pessoa3 = pessoa('Tiago', 'Gomes', 33)
// console.log(pessoa1)


const pessoa = {
    nome: 'Gabriel', 
    sobreNome: 'Carvalho', 
    idade: 22,

    fala() {
        console.log(`${this.nome} ${this.sobreNome} de ${this.idade} anos esta dizendo oláaaaaa...`)
    },

    idadeIncremento() {
        this.idade++
    }
}
pessoa.fala()
pessoa.idadeIncremento()
pessoa.fala()
pessoa.idadeIncremento()
pessoa.fala()