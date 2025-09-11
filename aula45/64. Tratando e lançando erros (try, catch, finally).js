


// const soma = (x,y) => {
//     return x + y
// }


// try { // SEMPRE É EXECUTADO NORMALMENTE, MAS SE ELE ENCONTRAR UM ERRO NESSE BLOCO IRA AUTOMATICAMENTE EXECUTAR O CATCH 
//     console.log(soma(2,a)) // AQUI TEMOS UM ERRO POIS A VARIAVEL a NÃO ESTA DEFINIDA
//     console.log(`Manipulei um arquivo e egrou erro`)
//     console.log(`Fechei o arquivo`)
// } catch(e) { // EXECUTADO QUANDO HA ERROS / SO RODA QUANDO ENCONTRA ERROS NO TRY
//     console.log(`Tratando erros`, e)
// } finally { // SEMPRE EXECUTADO INDEPENDENTE DE ERROS 
//     console.log(`FINALLY: Eu sempre sou executado.`)
// }


// instanceof verifica se um objeto foi criado a partir de um construtor específico (seja nativo ou definido por você).
// Construtores nativos: Object, Array, Date, Error, RegExp, Function...
// Construtores criados por você: funções ou classes (Pessoa, Animal, etc).


function retorna(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError(`[ERRO DE INSTANCIA] Esperando data.`)
    }
    
    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString(`pt-BR`, {
        hour12: true,
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`,
    })
}


try {
    
    const data = retorna(11)
    
    console.log(data)
} catch (erro){
    console.log(`algo esta errado.`)
} 
