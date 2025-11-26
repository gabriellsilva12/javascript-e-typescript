module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        return console.log(`${this.nome} está fazendo au au.`)
    }
}