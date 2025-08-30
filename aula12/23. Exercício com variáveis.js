// Facá varA tem o valor de varB, varB ter o valor de varC, e varC ter o valor de varA

let varA = "A"; // B
let varB = "B"; // C 
let varC = "C"; // A


// JEITO ANTIGO DE RESOLVER
// let novoA = 'B';
// let novoB = 'C';
// let novoC = 'A';

// varA = novoA;
// varB = novoB;
// varC = novoC;

// NOVO JEITO USANDO ARRAYS


[varA, varB, varC] = [varB, varC, varA]; 


console.log(varA,varB,varC)