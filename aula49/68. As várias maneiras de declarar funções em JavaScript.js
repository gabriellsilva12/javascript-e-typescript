// Declaração de função (function hoisting)
function falaOi() {
    console.log('Oieeeeee')
}

// First-class object (objetos de primeira classe)
//function expressions
const funcaoDado = function () {
    console.log('olaaaaaa')
}
// funcaoDado()

//Arrow function

const functionArrow1 = () => console.log('olaaaaaa arrow1')

const functionArrow2 = () => {
    console.log('olaaaaaa arrow2')
} 
// functionArrow2()

//function dentro de um objeto

const obj = {
    // falar: function () { PRIMEIRA MANEIRA
    //     console.log('ólaaaa')
    // }

    falar() { // SEGUNDA MANEIRA
        console.log('ólaaaa')
    }
}
obj.falar()