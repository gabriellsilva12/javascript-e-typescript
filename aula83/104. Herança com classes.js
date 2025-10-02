// HERANÇAS CLASS
/* EXTENDS: FAZ UMA CLASSE 'FILHA' E HERDA TUDO QUE FOI CRIADO NA CLASSE PAI
// SUPER(): ATUA JUNTO COM O EXTENDS(), CHAMA O CONSTRUCTOR DA CLASSE "PAI" E INICIALIZA AS PROPRIEDADES HERDADAS, MAS UTILIZANDO O "THIS" DA CLASSE FILHA

• EXTENDS E SUPER()
    class teste1 {
        constructor( nome, sobrenome ){
            this.nome = nome 
            this.sobrenome = sobrenome
        }
    }
    class teste2 extends teste1 { // EXTENDS HERDA TUDO DE TESTE1.
        constructor( nome, sobrenome ) { 
            super(nome, sobrenome) // SUPER CHAMA O CONTRUCTOR DO PAI E USA O THIS FILHO.
        }
    }

    const pessoa = new Teste2("Gabriel", "Silva")
    console.log(pessoa) // { nome: 'Gabriel', sobrenome: 'Silva' }

*/


class dispositivoEletronico {
    constructor( nome ) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado.');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado.');
            return;
        } 
        this.ligado = false 
    }
};

class Smartphone extends dispositivoEletronico { // HERANÇA COM CLASS

    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
} 

class Tablet extends dispositivoEletronico {
    constructor(nome, tamanho) {
        super(nome);
        this.tamanho = tamanho;
    }

    ligar() {
        console.log('Você alterou o ligar()')
    }
}

 
const d1 = new dispositivoEletronico('celular')
const d2 = new Smartphone('Samsung', 'preto', 'S10')
const d3 = new Tablet('Samsung', 12)


console.log(d1)
console.log(d2)
console.log(d3)


