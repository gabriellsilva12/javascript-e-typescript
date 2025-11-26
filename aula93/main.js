

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomecompleto() {
        return `Olá me chamo ${this.nome} ${this.sobrenome}`
    }
}

const nPessoa = new Pessoa('Gabriel', 'Silva')
console.log(nPessoa.nomecompleto())