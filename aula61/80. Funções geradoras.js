// GENERATING FUNCTION 
/* O QUE É UMA FUNÇÃO GERADORA? UMA FUNÇÃO GERADORA É UMA FUNÇÃO QUE PARECE COM OUTRA NORMAL MAS QUE TEM ALGUMA DIFERENÇAS, TIPO: 
1° - DIFERENTE DE OUTRAS FUNÇÕES ELA UTULIZA O * NO SEU INICIO.
function* generator() {

}

2° - ELA RETORNA O RESULTADO EM PARTES DE ACORDO COM A SEQUENCIA QUE ELA FOR CHAMADA UTILIZANDO A PALAVRA 'YIELD'.
function* generator() {
    yield '1'; // PRIMEIRO CHAMADO .next() RETORNA 1 

    yield '2'; // SEGUNDO CHAMADO .next() RETORNA 2
}
3° - ELA TAMBEM PODE RETORNA FUNÇÕES PELO YIELD
function* generator() {
    yield function () {
        console.log('y1')
    }
}

const g1 = generator();
const func1 = g1.next().value;
func1()

4° - E PARA ACESSAR O SEU VALOR UTILIZA-SE O .NEXT()
function* generator() {
    yield 'valor 1'
}

generator().next().value 

ou 

const g1 = generator()
g1.next().value


*/
function* geradora1() {
    yield 'valor 1';

    yield 'valor 2';

    yield 'valor 3';
};

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    };
};

function* geradora3() {
    yield 1;
    yield 2;
    yield 3;
};

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
};

function* geradora5() {
    yield function () {
        console.log('y1')
    }
    
    yield function () {
        console.log('return')
    }

    yield function () {
        console.log('y2')
    }
}

const g1 = geradora5();
const func1 = g1.next().value;
func1()