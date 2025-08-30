



function criaCalcculadora(a,b) {
    if ( b == 0) {
        console.log(`[ERRO] Esta divisão é por zero`)
    } else {
        divisao = a / b 
    }
    return {
        soma: a + b,
        subtrai: a - b,
        multiplica: a * b,
        divisao: divisao
    }
}

console.log(criaCalcculadora(10,10))
