
// funcao.call(contextoDoThis, param1, param2, param3)
// Produto.call(this, nome, preco)
//        ↑     ↑    ↑     ↑
//        |     |    |     |
//        |     |    |     └── segundo parâmetro para Produto
//        |     |    └──────── primeiro parâmetro para Produto  
//        |     └───────────── contexto do this (objeto Camiseta)
//        └─────────────────── função a ser executada

// É como se você dissesse para a função Produto:

// "Ei, Produto! Use meu espaço de trabalho (this) em vez do seu, e trabalhe com esses dados que estou te passando!"

function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca
Caneca.prototype.estoqu = function(estoque) {
    this.estoque = this.estoque + estoque
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
Camiseta.prototype.aumento = function(porcentagem) {
    this.preco = this.preco + (this.preco * porcentagem) / 100
}


const novaCamiseta = new Camiseta('Regata', 7.5 ,'black')
const caneca = new Caneca('Caneca feliz', 22, 'vidro temperado', 5)
novaCamiseta.aumento(100)
// console.log(caneca)
caneca.estoqu(10)
console.log(novaCamiseta)
console.log(caneca)
