/* const erros = []

try {
    console.log(gabriel) // IS NOT DEFINED
} catch (err) { O ERRO DO BLOCO ACIMA IRA FICAR SALVO DENTRO DE (ERR) E EXECUTARA O QUE TIVER DENTRO DE CATCH
    erros.push(err)
}
console.log(erros)


*/

function soma(x,y) {
    if (typeof x !== `number` || typeof y !== `number`) {
        throw new Error(`x ou y não são numeros, tente novamente.`) // throw new Error usado para criar e mostrar um erro / `Error: x ou y não são numeros, tente novamente.`
    } else {
        return x + y
    }
}


try { // ESSA PARTE DO CODIGO É EXECUTADA QUANDO NÃO HA ERROS
    console.log(soma(2,3))
    console.log(soma(`2`,3))
} catch(erro) { // ESSA É EXECUTADA QUANDO HA ERROS
    // console.log(erro)
    console.log(`Alguma coisa mais amigavel para o usuario.`)
}