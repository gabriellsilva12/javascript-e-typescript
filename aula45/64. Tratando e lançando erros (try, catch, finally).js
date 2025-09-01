


const soma = (x,y) => {
    return x + y
}


try { // SEMPRE É EXECUTADO NORMALMENTE, MAS SE ELE ENCONTRAR UM ERRO NESSE BLOCO IRA AUTOMATICAMENTE EXECUTAR O CATCH 
    console.log(soma(2,a)) // AQUI TEMOS UM ERRO POIS A VARIAVEL a NÃO ESTA DEFINIDA
    console.log(`Manipulei um arquivo e egrou erro`)
    console.log(`Fechei o arquivo`)
} catch(e) { // EXECUTADO QUANDO HA ERROS / SO RODA QUANDO ENCONTRA ERROS NO TRY
    console.log(`Tratando erros`, e)
} finally { // SEMPRE EXECUTADO INDEPENDENTE DE ERROS 
    console.log(`FINALLY: Eu sempre sou executado.`)
}