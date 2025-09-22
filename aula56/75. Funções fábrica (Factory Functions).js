// FACTORY FUNCTIONS (FUNCAO FABRICA)
/* O QUE É UMA FACTORY FUNCTION? É UMA FUNÇÃO QUE ME RETORNA UM OBJETO PRONTO COM METODOS E PROPRIEDADES.

EXEMPLO:
function criaPessoa(nome) {
    return { nome }
}
const p1 = criaPessoa("Gabriel")

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONSTRUCTOR FUNCTIONS
O QUE SÃO CONSTRUCTOR FUNCTIONS? É UMA FUNÇÃO QUE TAMBEM ME RETORNA UM OBJETO MAS QUE DIFERENTE DA FACTORY FUNCTION EU NÃO TENHO A NECESSIDADE DE USAR O RETURN POIS O NEW JÁ FAZ ISSO AUTOMATICAMENTE.
OBS: O NOME DE UMA CONSTRUCTOR FUNCTION SEMPRE COMEÇA COM UMA LETRA MAIUSCULA E SEMPRE TEM QUE TER O JUNTO NEW.

    
    EXEMPLO:
    function Pessoa(nome) { // NOME DA FUNÇÃO COM LETRA MAIUSCULA
    this.nome = nome
    }
    const p1 = new Pessoa("Gabriel") // NEW NECESSARIO SEMPRE 

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// GETTER
   O QUE É GETTER (GET)? É UM METODO QUE 'TRANSFORMA' UMA FUNÇÃO EM PROPRIEDADE E PODE SER UTILIZADA IGUAL UMA PROPRIEDADE, SEM A NECESSIDADE DE USAR PARENTESES

    EXEMPLO:
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    console.log(pessoa1.nomeCompleto) /// SEM () PORQUE É UM GETTER

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// SETTER
   O QUE É UM SETTER (SET)? É UM METODO QUE PODE ALTERAR/ATRIBUIR VALORES A UMA PROPRIDADE QUE NA VERDADE RODA UMA FUNÇÃO

    EXEMPLO:
    set nomeCompleto(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }

    pessoa1.nomeCompleto = "Tiago Sousa Pinto"N

*/
// ELA CONSTROI FUNCOES DENTRO DE OBJETOS 

function Pessoa (nome, sobrenome, p, a) {
    return {
        nome, 
        sobrenome,
        peso: p,
        altura: a,

        //getter 
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        get fala() {
            return `${this.nome}, seu peso é de ${this.peso}Kg, sua altura é de ${this.altura}M`
        },

        // GETTER
        //get imc() { // Aqui eu poderia so obter o valor que imc me retornaria usando get, e quando imc fosse chamado não precisaria ser usado o () como em qualquer outra funcao
        //     const indice = this.peso / (this.altura ** 2)
        //     return `Ola ${this.nome} seu IMC é de ${indice.toFixed(2)}`
        // }

        imc() {
            const indice = this.peso / (this.altura ** 2)
            return `Ola ${this.nome} seu IMC é de ${indice.toFixed(2)}`
        }
    }
}

const pessoa1 = new Pessoa('Gabriel', 'Silva', 60, 1.63)
pessoa1.nomeCompleto = 'Tiago Sousa Pinto'

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.fala)



