// const nome = 'Gabriel';
// const sobreNome = 'Silva';

// const falaNome = () => nome + ' ' + sobreNome

// // module.exports.nome = nome;
// // module.exports.sobreNome = sobreNome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobreNome = sobreNome; 
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'Esse this é referente ao module.exports'


class Pessoa {
    constructor(nome){
        this.nome = nome;
    } 
}


exports.classPessoa = Pessoa;

