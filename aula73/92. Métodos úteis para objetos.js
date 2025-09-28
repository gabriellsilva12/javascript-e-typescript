/* MÉTODOS OBJETOS
• Object.values //  MOSTRA O VALORES DE CADA PROPRIEDADE DO OBJETO.

    const produto = { nome: 'caneca', preco: 1.8};
    console.log(Object.values(produto)) // [ 'caneca', 1.8 ]

• Object.entries // MOSTRA AS PROPRIEDADES E OS VALORES DO OBJETO DENTRO DE UM ARRAY.

    const produto = { nome: 'caneca', preco: 1.8};
    console.log(Object.entries(produto)) //   [ [ 'nome', 'caneca' ], [ 'preco', 1.8 ] ]

• Object.assign(des, any) // 

    const produto = { nome: 'caneca', preco: 1.8};

    const outroProduto = Object.assign( {}, produto, { // FAZ A MESMA COISA QUE O SPREAD OPERATOR, {} CRIA UM OBJETO NOVO, produto <- PEGA PRODUTO CRIA UM NOVO OBJETO SEM MEXER NO ORIGINAL 
        nome: produto.nome,
        preco: produto.preco,
        material: 'porcelana' // CRIEI UMA NOVA PROPRIEDADE COM O NOME MATERIAL E VALOR 'PORCELANA'  
    })

    console.log(outroProduto) // { nome: 'caneca', preco: 1.8, material: 'porcelana' }

• Object.getOwnPropertyDescriptor(objeto, 'valor') // MOSTRA AS REGRAS INTERNAS DAQUELA CHAVE ( SE PODE MUDAR, APARECER, SER RECONFIGURADA, OU SE TEM GETTER/SETTER)

    const produto = { nome: 'caneca', preco: 1.8};
    console.log(Object.getOwnPropertyDescriptor( produto, 'nome'))  //  {
                                                                        value: 'caneca', // VALOR DE NOME 
                                                                        writable: true,  // PODE SER EDITADO 
                                                                        enumerable: true, // NOME PODE SER MOSTRADO 
                                                                        configurable: true // NOME PODE SER RECONFIGURADO
                                                                        }

• ...(spread operator) // espalha o objecto/array em algum lugar, otimo para fazer uma copia

    const produto = { nome: 'caneca', preco: 1.8};
    const outroProduto = { ...produto } // FEZ O MESMO QUE Object.assign(), FEZ UMA COPIA DE PRODUTO MAS QUE NÀO ESTA LIGADA A PRODUTO, SÓ QUE DE UMA MANEIRA BEM MAIS SIMPLES.

• Object.keys // retorna a chave como array

    const produto = { nome: 'caneca', preco: 1.8};
    console.log(Object.keys(produto)) // [ 'nome', 'preco' ]

• Object.freeze // congela o objeto

    const produto = { nome: 'caneca', preco: 1.8};
    Object.freeze(produto) // congela o objeto e não permite alterações.

• Object.defineProperty // define propriedades de uma chave

• Object.defineProperties // define propriedades de varias chaves
*/

const produto = { nome: 'caneca', preco: 1.8};

const outroProduto = Object.assign({}, produto, {
    nome: produto.nome,
    preco: produto.preco,
    material: 'porcelana'
})
console.log(produto)
console.log(outroProduto)
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))



// Object.defineProperties(outroProduto, {
//     nome: {
//         value: 'caneca',
//         enumerable: true,
//         writable: false,
//         configurable: true
//     },
//     preco: {
//         value: 2.5,
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     estoque: {

//     }
// })
// outroProduto.preco = 2.5 