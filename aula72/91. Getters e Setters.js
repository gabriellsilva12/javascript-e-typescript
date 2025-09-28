// GETTERS E SETTERS
/* O QUE É GETTER/GET? GETTER CONTROLA A PARTE DA LEIUTRA DO VALOR DE UMA PROPRIEDADE.

• GETTER / GET

function produto(nome) {    
    return {
        get nome(){ 
            return nome;
        }
    }   
}
const p1 = produto()
console.log(p1.nome) // GETTER ESTA CONTROLANDO O QUE IRA RETORNA PARA CONSOLE.LOG


// O QUE É SETTER/SET? SETTER JÁ CONTROLA QUANDO ALGO TENTA MODIFICAR O VALOR DE UMA PROPRIEDADE E ELE TAMBEM RECEBE ESSE VALOR POR PARAMETRO.
function produto(nome) { 

• SETTER / SET

function produto(nome) {    
    return {
        get nome(){
            return nome;
        },
        set nome(valor) { // valor === 'olaaa'
            nome = valor // SETTER ESTA CONTROLANDO O QUE SERA FEITO COM O VALOR('OLAAA') QUE FOI RECEBIDO.
        }
    }   
}
const p1 = produto()
p1.nome = 'olaaa' // SETTER IRA RECEBER ESSE VALOR DE MODIFICAÇÃO COMO PARAMETRO E MODIFICAR O VALOR. 


*/
// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, 
//         configurable: true,
//         get: function() {
//             return estoque
//         },
//         set: function (valor) {

//             if(typeof valor !== typeof estoque) {
//                 throw new TypeError('Valor inexistente.')
//             };
//             estoque = valor
//         }
//     });
// };

// const p1 = new Produto('camiseta', 20, 3)
// p1.estoque = 11
// console.log(p1.estoque)


function produto(nome) {    
    return {
        get nome(){
            return nome;
        },
        set nome(valor) {
            valor = valor.replace(' bla', '')
            nome = valor
        }
    }   
}

const p1 = produto('camiseta');
p1.nome = 'bla bla'
console.log(p1.nome)