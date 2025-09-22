// CONSTRUCTOR FUNCTION -> OBJETOS 
// FACTORY FUNCTION -> OBJETOS
// CONSTRUCTOR -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    const id = 1234567; // USANDO CONST EU CRIO UM ATRIBUTO OU METODO PRIVADO QUE NÃO PODE SER ACESSADO FORA DA FUNÇÀO.
    this.nome = nome; // QUANDO UTILIZO THIS É CONSIDERADO ATRIBUTO OU METODOS PUBLICOS, POIS EU CONSIGO ACESSAR FORA DA FUNÇÃO,
    this.sobrenome = sobrenome;
    this.falaOi= () => {
        console.log('oiiiiiiii')
    };
};

const p1 = new Pessoa('Gabriel', 'Silva')
p1.falaOi()
// console.log(p1)
