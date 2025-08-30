const produto = {
    nome: 'Notebook',
    preco: 3500,
    detalhes: {
        fabricante: 'Dell',
        estoque: 120
    }
};

// Pegue:
// - nome como "item"
// - fabricante como "marca"
// - estoque sem mudar o nome

const {nome: item, detalhes: { fabricante: marca}, detalhes: {estoque}} = produto;


console.log(item, marca, estoque)