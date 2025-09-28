/* TODA FUNCAO CONSTRUTORA INDEPENDENTE DE QUAL SEJA TEM UM Objetc.prototype / __proto__  

• Object.create(Produtos.prototype, {}) 
// AQUI EU ESTOU CRIANDO UM OBJETO E TAMBEM JA ADICIONANDO UM PROTOTYPE JA EXISTENTE A ELE.
    
    const sapato = Object.create(produto.prototype, {
        preco: { // AQUI EU POSSO USAR OS MEUS MÉTODO AUMENTO E DESCONTO, JÁ QUE O NOME DAS PROPRIEDADES SÃO A MESMA 
            writable: true,
            configurable: true,
            enumerable: true,
            value: 33 // AQUI EU ESTOU ADIONANDO O VALOR NA PROPRIEDADE preco E FAZENDO O MESMO QUE { preco: 33 }
        },
        tamanho: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 33
        }    
    })

• Object.setPrototypeOf(p1 ,Produtos.prototype) 
// DEFINE UM PROTOTYPE PARA UM OBJETO, NESSS CASO IRA RECEBER O PROTOTYPE.AUMENTO E PROTOTYPE.DESCONTO

    const p1 = {
        nome: 'short',
        preco: 50
    }
    Object.setPrototypeOf(p1 ,Produtos.prototype)
    (p1 ,Produtos.prototype) // AQUI EU ESTOU PEGANDO MEU OBJETO p1 E COLOCANDO MEU PRODUTOS.PROTOTYPE QUE CONTEM O METODO AUMENTO E DESCONTO DENTRO DELE


*/
//  const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype 
// }

// const objB = {
//     chaveB: 'B'
// }

// const objC = new Object();
// objC.chaveC = 'C'

// Object.setPrototypeOf(objA, objB)
// Object.setPrototypeOf(objB, objC)


function Produtos(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produtos.prototype.desconto = function(porcentagem) {
    this.preco = this.preco - ((this.preco * porcentagem) / 100)
}

Produtos.prototype.aumento = function( aumento ) {
    this.preco = this.preco + (this.preco * aumento) / 100
}

const p3 = Object.create(Object.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 33
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 39
    }
})

Object.defineProperty(p3, 'tamanho', {
    writable: false,
    configurable: true,
    enumerable: true,
})
p3.tamanho = 54
console.log(Object.getOwnPropertyDescriptor(p3, 'tamanho'))

const p1 = {
    nome: 'short',
    preco: 50
}
Object.setPrototypeOf(p1 ,Produtos.prototype)


// p1.aumento(50)
// const pDesconto = new Produtos('camisa', 100)
// pDesconto.desconto(50)
// pDesconto.aumento(50)
// console.log(Object.getOwnPropertyDescriptor(p3, 'tamanho2'))




/*
    • Object.create(Produtos.prototype, {}) // AQUI EU ESTOU CRIANDO UM OBJETO E TAMBEM JA ADICIONANDO UM PROTOTYPE JA EXISTENTE A ELE.
    • Object.setPrototypeOf(p1 ,Produtos.prototype) // DEFINE UM PROTOTYPE PARA UM OBJETO, NESSS CASO IRA RECEBER O PROTOTYPE.AUMENTO E PROTOTYPE.DESCONTO

*/