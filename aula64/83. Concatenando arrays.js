// CONCATENAÇÃO DE ARRAYS

let a1 = [1,2,3]
let a2 = [4,5,6]

// UTILIZANDO O .SPLICE()
// a1.splice(a1.length ,0, ...a2)  // [ 1, 2, 3, 4, 5, 6 ]

// UTILIZANDO O .CONCAT()
// const a3 = a1.concat(a2)  // [ 1, 2, 3, 4, 5, 6 ] 

// UTILIZANDO O SPREAD/REST OPERATOR
// const a3 = [...a1 , 'Gabriel' , ...a2, ...[ 7, 8 , 9 ]]   // [ 1, 2, 3, 'Gabriel', 4, 5, 6, 7, 8, 9 ]

console.log(a3)