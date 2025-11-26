const path = require('path')
const caminhoa = path.resolve(__dirname, 'text.json')

const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

const pessoas = [
    {nome: 'gabriel'},
    {nome: 'luiz'},
    {nome: 'maria'},
    {nome: 'joão'},
]

const json = JSON.stringify(pessoas, ' ', 2)
escreve(caminhoa, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    const json = renderizaDados(dados)
    return json
}

function renderizaDados(dados) {
    const json = JSON.parse(dados)
    json.forEach(e => console.log(e));
    return json;
}

lerArquivo(caminhoa)