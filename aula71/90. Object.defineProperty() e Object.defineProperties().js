// DEFINEPROPERTY E DEFINEPROPERTIES
/* O QUE É DEFINEPROPERTY()? ELA PERMITE CONTROLAR DETALHES DE UMA PROPRIEDADE/CHAVE DE UM OBJETO, COMO SE ELA VAI PODER SE APAGADO, SE PODERA SER REESCRITA, SE CHAVE PODERA SER MOSTRADA, OU RECONFIGURADA DEPOIS POR DEFINEPROPERTY() DEPOIS.

• DEFINEPROPERTY()

    function Produto( nome, preco, estoque ) {
        Object.defineProperty(this, 'nome' {
        enumerable:true 
        value: nome
        writable: true
        configurable: true
        })
    }

//E DEFINEPROPERTIES()? FAZ A MESMAS COISAS QUE O DEFINEPROPERTY(), A DIFERENÇA É QUE DEFINEPROPERTIES() VOCÊ PODE MEXER EM MAIS DE UMA CHAVE POR VEZ ENQUANTO DEFINEPROPERTY() VOCE SO PODE MEXER EM UMA.

• DEFINEPROPERTIES()

    function produtos( nome, preco, estoque ) {
        Object.defineProperties(this, {
        nome: {
            enumerable: true   // AQUI ELE ESTA LIBERANDO O ACESSO CHAVE NOME 
            value: nome   // AQUI ESTA PASSANDO O VALOR DA CHAVE 
            writable: true   // AQUI TRUE ESTA LIBERANDO A CHAVE NOME PARA SER ALTERADA DEPOIS.
            configurable: true   // AQUI DEFINE SE A ESSA PROPRIEDADE Object.defineProperty(), PODE OU NÃO SER ALTERADA DEPOIS OU TAMBEM APAGADA.
        },
        
        preco: {
            enumerable: true
            value: preco
            writable: true
            configurable: true
        },
        })
    }








*/




function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // MOSTRA A CHAVE 
        value: estoque, // VALOR DA CHAVE 
        writable: false, // DEFINE SE O VALOR DA CHAVE PODE SER OU NÃO ALTERADO.
        configurable: true // DEFINE SE A ESSA PROPRIEDADE Object.defineProperty( this, 'estoque', PODE OU NÃO SER ALTERADA DEPOIS OU TAMBEM APAGADA.
    }),

        Object.defineProperties(this, {
            nome: {
                enumerable: true,
                value: nome,
                writable: false,
                configurable: false
            },
            preco: {
                enumerable: true,
                value: preco,
                writable: false,
                configurable: false
            }
        })
}

const p1 = new Produto('camisa', 22, 3)
p1.preco = 50000;
console.log(Object.keys(p1)) // Object.keys() MOSTRA AS CHAVES DO MEU OBJETO COMO UM ARRAY   ->   [ 'nome', 'preco', 'estoque' ]
console.log(p1)