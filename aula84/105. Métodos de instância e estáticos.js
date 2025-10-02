// METODO STATICO E DE INSTANCIA
/*
// O QUE SAO METODOS ESTATICOS? SAO METODOS QUE PERTENCEM A CLASSE E SO PDOEM SER ACESSADOS POR ELA E NÃO PELA INSTANCIA, METODOS ESTATICOS TAMBEM NÃO ENXERGAM E NÃO CONSEGUEM ACESSAR O THIS JÁ QUE ELES PERTENCEM A CLASSE

• METODOS STATIC
class teste {
    constructor(nome) {
        this.nome = nome;
    }

    metodoInstancia() { // ESSE METODO PODE SER ACESSADO NORMALMENTE ATRAVES DA INSTANCIA
        console.log('Acessou instancia')
    }
    
    static metodoStatic() { // ESSE METODO SO PODE SER ACESSADO VIA CLASSE: teste.metodoStatic
        console.log('Acessou Static')
    }
}
const M1 = new teste('testeeeee')
M1.metodoInstancia() // console,log('Acessou instancia')
M1.metodoStatic() // [erro] ELE SO PODE SER ACESSADO ATRAVES DA CLASSE 
teste.metodoStatic() // console.log('Acessou Static')
*/


class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // METODO DE INSTANCIA
    aumentarVolume() {
        if(this.volume >= 100) return;
        this.volume++
    }
    // METODO ESTATICO
    static diminuirVolume() {
        if(this.volume === 0) return;
        this.volume--
    }
    // METODO DE INSTANCIA
    trocaPilha() { // METODO QUE PODE SER ACESSADO POR NORMALMENTE PELA INSTANCIA 
        console.log('Pilha já trocada.')
    }
    // METODO ESTATICO
    static trocaPilha2() { // METODO QUE SO PODE SER ACESSADO ATRAVES DO NOME DA CLASSE, NESSE CASO ControleRemoto.trocaPilha2

    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log()
