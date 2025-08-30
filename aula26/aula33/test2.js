const livros = [
    { titulo: '1984', autor: 'George Orwell', preco: 39.9 },
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', preco: 29.9 },
    { titulo: 'Clean Code', autor: 'Robert C. Martin', preco: 79.9 }
];

// Pegue:
// - o segundo livro inteiro como uma variável chamada "favorito"
// - todos os outros livros no array "outros"

// 1 Maneira

const [ primeiro, favorito, ...outros ] = livros;
const outro = [primeiro,...outros ]
// O Hobbit
console.log(outro);   // 1984 e Clean Code

// 2 maneira

// outros = [];
// const [ ,{...favorito},  ] = livros;
// outros.push(livros[0],livros[2])

// console.log(outros)