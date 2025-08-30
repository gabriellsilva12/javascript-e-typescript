
/* ARREDONDANDO NUMEROS QUEBRADOS PARA BAIXO COM Math.floor
let num1 = 9.554343;
let num2 = Math.floor(num1); 
num2 = 9
num2 arredondou para baixo e virou 9; 

// ARREDONDANDO NUMEROS QUEBRADOS PARA CIMA COM Math.ceil;
let num1 = 9.554343;
let num2 = Math.ceil(num1); 
num2 = 10
num2 arredondou para baixo e virou 10; 

// ARREDONDANDO NUMEROS QUEBRADOS DE ACORDO COM O MAIOR OU MENOR VALOR QUEBRADO Math.round;

let num1 = 9.554343;
let num2 = Math.round(num1); 
num2 = 10;
num2 arredondou para cima e virou 10, pois o valor quebrado é mais da metade.; 

// CRIANDO VALORES ALEATORIOS DE ENTRE 1 E 0, USANDO Math.random()

let num = Math.random();
console.log(num);

*/
// let num = Math.random();
// console.log(num);
// num = num * (10 - 5);
// console.log(num);
// num = num + 5;
// console.log(num);


let soma = (n ,m= 0) => Math.pow(n, m)

console.log(soma(10,10))