//FUNÇÕES DE CALLBACK
/*O QUE SÃO FUNÇÕES DE CALLBACK? É UMA FUNÇÃO QUE É PASSADA COMO ARGUMENTO PARA FUNÇÃO E PODE SER CHAMADA A QUALQUER MOMENTO DENTRO DELA QUANDO NECESSÁRIO

EXEMPLO:
function executar(acao) {
    console.log('Comecei')
    acao() // aqui eu chamo o callback
    console.log('Terminei')
}

function dizerOla() {
    console.log('Olá!')
}

executar(dizerOla) // Comecei Olá Terminei
*/

function rand(max = 3000, min = 1000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(() => {
        console.log('f1')
        if (callback) return callback()
    }, rand());
}

function f2(callback) {
    setTimeout(() => {
        console.log('f2')
        if (callback) return callback()
    }, rand());    
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3')
        if (callback) return callback()
    }, rand());
}

f1(f1CallBack)

function f1CallBack() {
    f2(f2CallBack)
}

function f2CallBack() {
    f3(function () {
        console.log('olá mundo!')
    })
} 
// f1(function() {
//     f2(function() {
//         f3(function () {
//             console.log('Olá mundo!')
//         });
//     });
// });

