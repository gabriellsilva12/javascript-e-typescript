const empresa = {
    nome: 'TechX',
    local: {
        cidade: 'São Paulo',
        pais: 'Brasil'
    },
    funcionarios: [
        { nome: 'Ana', cargos: ['dev', 'designer'] },
        { nome: 'Carlos', cargos: ['manager', 'qa'] }
    ]
};

// Pegue:
// - o país como "country"
// - o primeiro cargo do Carlos como "cargoCarlos"


const {local: {pais: country}, funcionarios: [,{cargos: [cargoCarlos]}] } = empresa;

console.log(cargoCarlos)