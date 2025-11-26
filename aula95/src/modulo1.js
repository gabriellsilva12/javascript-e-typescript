export const nome = 'Gabriel';
export const sobrenome = 'Silva';
export const idade = 22;

export function soma(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number' ) return;
    return x + y  
}

export class Pessoa {
    constructor(nome, sobrenome, idade ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    apresenta() {
        return `Olá me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade}`;
    }
}

export default (x,y) => x + y // exportando uma função padrão


// export { nome,sobrenome,idade, soma}
// export { nome as default,sobrenome,idade, soma } // agora nome é default