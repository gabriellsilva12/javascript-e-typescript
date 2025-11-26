// const mode = require('./mode1'); // trazendo todo o module de mode1
// const modeFalanome = require('./mode1').falaNome; // trazendo somente a funcão falaNome
// const { nome: nvNome, sobreNome, falaNome } = require('./mode1');

// console.log(nvNome, sobreNome, falaNome())



const path = require('path')
const axios = require('axios')
const { classPessoa } = require('./mode1');

axios('https://jsonplaceholder.typicode.com/users')
    .then( response => console.log(response.data))
    .catch( e => console.log('erro')) 

// const p = new classPessoa('Gabriel')
// console.log(p.nome)