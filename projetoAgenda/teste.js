// const n = [3, 1, 3, 5, 1, 8, 4, 5];

// let nn = 0; 
// for (num of n ) {
//     if(num > nn) {
//         nn = num
//         console.log('O maior numero é ' + nn)
//     }
// }

const n = [4, 2, 7, 1, 3]

let s = 0;
let valorAntesDeDez = 0
for( num of n ) {
    if ((s + num) >= 10) {
        console.log(s)
        return
    }
    s +=  num
    console.log('Num Array:' + num,', S:' + s)
    console.log('soma:' + s)

    console.log()
}
console.log(valorAntesDeDez)

// const array = [2, 5, 2, 7, 2, 9, 5]
// numero = 2
// let numeroDeVezes = 0

// for ( num of array ) {
//     if(num === 2 ) {
//         numeroDeVezes ++
//         console.log('O número 2 apareceu ' + numeroDeVezes + ' vezes.')
//     }
// }
// console.log(numeroDeVezes)
