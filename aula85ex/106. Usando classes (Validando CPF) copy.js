
/*389.148.871-89
 
     3  8  9  1  4  8  8  7  1 
    10  9  8  7  6  5  4  3  2

     3  8  9  1  4  8  8  7  1  8
    11 10  9  8  7  6  5  4  3  2
 
    11 - (resto % 11) = 
*/
let cpf = '389.148.871-89'
cpf = cpf.replace(/\D+/g, '')
cpf = cpf.slice(0, -2)
cpf = Array.from(cpf)
// console.log(cpf)
class CpfNovo {
    constructor(cpf) {
        this.cpf = cpf
        this.c1 = this.verificarCpf()
        this.cpf.push(this.c1)
        this.c2 = this.verificarCpf(this.c1)
        this.cpf.push(this.c2)
        this.c3 = this.converterString(this.cpf)
    }
    verificarCpf(v) {
        let cont = 10
        if (v) cont++
        const valorF = this.cpf.reduce((ac, valor) => {
            ac += (Number(valor) * cont)
            cont--
            return ac
        }, 0)
        return String(11 - (valorF % 11))
    }
    mostraC1() {
        // console.log(this.c1)
        // console.log(this.c2)
        console.log(this.c3)
    }

    converterString(v) {
        return v.join('')
    }
}

const p1 = new CpfNovo(cpf)
p1.mostraC1()
// p1.verificarCpf()
// p1.converterString()
 













/*


Resuma suas experiências: profissionais, acadêmicas ou pessoais. Nos conte suas conquistas. Qual o seu maior sonho?


Sou uma pessoa dedicada, comunicativa e sempre em busca de aprender. Tenho experiência como estagiário na área de T.I., atuando com suporte técnico, manutenção de computadores, montagem de cabos e instalação de sistemas. Também estudo programação com HTML, CSS e JavaScript, buscando aprimorar meus conhecimentos e crescer profissionalmente. Entre minhas conquistas, destaco a conclusão de cursos na área de informática e o aprendizado constante através da prática.
Meu maior sonho é construir uma carreira sólida na área de tecnologia, trabalhando com o que gosto e podendo evoluir a cada dia.


Sou uma pessoa muito dedicada, comunicativa, feliz e que sempre busco cada dia mais me aprimorar no que estou fazendo, tenho experiência como estagiario na área de T.I., atuando como suporte técnico, manutenção de computadores, montagem de cabos e instalção de sistemas. Também estudo programação como HTML5, CSS3, JavaScript, busco cada dia mais aprimorar meus conhecimentos e crescer profissionalmente. E minhas conquistas a principal entre elas hoje que eu posso falar com toda certeza é meu computador que eu montei com o dinheiro que consegui durante o tempo de estágio que eu fiz, pois era algo que eu almejava muito para meus estudos, hoje estudo em casa, mas pretendo fazer faculdade de programação também um dia. E meu maior sonho é contruir uma carreira sólida na área de tecnologia, trabalhar com o que gosto eu gosto e poder evoluir cada dia mais,


“Hall of Fame” pois ela fala se você acreditar em você mesmo podera alcançar grandes coisas com seu esforço e dedidação.


“Hall of Fame”, pois ela fala que se você acreditar em si mesmo, poderá alcançar grandes coisas com esforço e dedicação. E eu me identifico muito com essa mensagem, porque sempre procuro dar o meu melhor e continuar evoluindo, acreditando que o trabalho e a persistência poderão me levar a realizar meus sonhos.


Meu maior talento é a minha capacidade de aprendizado acelerado junto à dedicação e foco. Eu não só absorvo informações novas rapidamente, como me dedico profundamente para dominá-las e aplicá-las para resolver problemas de forma eficaz. Vejo feedbacks, especialmente os construtivos, como o combustível mais valioso para esse meu crescimento contínuo.





*/


















