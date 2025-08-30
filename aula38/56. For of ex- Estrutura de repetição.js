const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

// for ( i = 0 ; i < numeros.length; i++ ) {
//     console.log(numeros[i])
// }
let s = null; 

for ( i = 0 ; i < numeros.length; i++ ) {
    numeros[i] % 2 == 0 ? console.log(`${numeros[i]}: Par`) : console.log(`${numeros[i]}: Impar`)

    s = s + numeros[i]
    console.log(s)
    console.log('--------------------------')
}