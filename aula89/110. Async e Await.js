/* ASYNC / AWAIT
• O QUE É ASYNC?
    - async é usado antes de uma função.
    - transforma a função em uma função assíncrona.
    - toda função async automaticamente retorna uma Promise.
    - dentro dela, podemos usar "await" para esperar o resultado de uma Promise.

• O QUE É AWAIT?
    - await só pode ser usado dentro de funções async.
    - ele pausa a execução da função até a Promise ser resolvida (resolve ou reject).
    - com await, o código assíncrono fica parecendo código normal (síncrono).
    - se a Promise der erro, podemos tratar com try...catch.

• EXEMPLO:
    async function exemplo() {
        try {
            const resultado = await esperaAi('Tudo certo', 2000);
            console.log(resultado);
        } catch (erro) {
            console.log('Erro:', erro);
        }
    }

    exemplo();
*/

function numeroAleatorio() {
    const number = Math.floor(Math.random() * (3000 - 1000) + 1000);
    return number
}

function esperaAi(msg) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') return reject(new Error('BAD VALUE'));
        
        setTimeout(() => {
            resolve(msg)
        }, numeroAleatorio());
    })
}

// esperaAi('valor 1')
// .then( e => {
//     console.log(e)
//     return esperaAi('valor 2')
// }).then( e => {
//     console.log(e)
//     return esperaAi('valor 3')
// }).then( e =>{
//     console.log(e)
// })



async function executa() {
    const fase1 = await esperaAi('Fase 1')
    console.log(fase1)

    const fase2 = await esperaAi('Fase 2')
    console.log(fase2)
    
    const fase3 = await esperaAi('Fase 3')
    console.log(fase3)

    console.log('Terminamos na fase:', fase3)
}

executa()