class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    fala() {
        console.log(`${this.nome} está falando`)
    }
    comer() {
        console.log(`${this.nome} está comendo`)
    }
    beber() {
       console.log(`${this.nome} está bebendo`)
    }
}

function Pessoa2(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.fala = function() {
    console.log(`${this.nome} está falando`)
}

const p1 = new Pessoa('Gabriel', 'Silva')
const p2 = new Pessoa2('Gabriel', 'Silva')

p1.fala()
p2.fala()
// console.log()
// console.log()
