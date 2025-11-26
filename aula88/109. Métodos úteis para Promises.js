/*PROMISE
• O QUE É PROMISE?
    Promise é um objeto usado para lidar com operações assíncronas.
    Ela representa algo que pode:
        - dar certo (resolve)
        - ou dar errado (reject)
    A Promise recebe uma função com dois parâmetros: resolve e reject.
    Depois, para reagir ao resultado, usamos .then() e .catch().

• O QUE .THEN() E .CATCH() FAZEM?
    .then(): executa quando a Promise é resolvida (resolve)
    .catch(): executa quando a Promise é rejeitada (reject)
    .finally(): executa sempre, independente do resultado (opcional)

*/

function numeroAleatorio() {
    const number = Math.floor(Math.random() * (3000 - 1000) + 1000);
    return number
}

// function esperaAi(msg) {
//     return new Promise((resolve, reject) => {
//         if(typeof msg !== 'string') return reject(new Error('BAD VALUE'));
        
//         setTimeout(() => {
//             resolve(msg)
//             return;
//         }, numeroAleatorio());
//     })
// }



// const promise = [
//     'Primeiro Valor',
//     esperaAi('Promise 1'),
//     esperaAi('Promise 2'),
//     esperaAi('Promise 3'),
//     esperaAi(111),
//     'Outro valor'
// ]

// Promise.all(promise).then( v => {
//     console.log(v)
// }).catch(e => {
//     console.log( e)
// }) 


function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Página em cache')
    } else {
         esperaAi('Baixei a página.')
    }
}

baixaPagina().then( e => {
    console.log(e)
})




