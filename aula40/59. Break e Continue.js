const numeros = [1,2,3,4,5,6,7,8,9]



/* 

// CONTINUE
for (i of numeros) {
    
    if (i === 5) { // SE I FOR IGUAL A 5 EXECUTE O BLOCO ABAIXO
        continue; // CONTINUE NÃO EXECUTA NADA QUE TIVER ABAIXO E VOLTA A REPETIÇÃO PARA O INICIO, NO CASO SO PULARIA O NUMERO 5 E IRIA CONTINUAR A PARTIR DO NUMERO 6.
    }

    console.log(i) // 1 2 3 4 6 7 8 9 
}

// BREAK   
for (i of numeros) {
    
if (i === 5) { // SE I FOR IGUAL A 5 EXECUTE O BLOCO ABAIXO
break; // NO BREAK É DIFERENTE, ELE NÃO CONTINUA EXECUTANDO A REPETIÇÃO, A PARTIR DO MOMENTO QUE É ENCONTRADO UM BREAK, ELE SAI DO LAÇO DE REPETIÇÀO QUE ELE ESTIVER, NESSE CASO O FOR. 
}

console.log(i) // 1 2 3 4 5 
}
*/ 
let i = 0

while (i < numeros.length) {
    
    let n = numeros[i]

    if (n === 2) {
        i++
        continue; 
    }

    if (n === 7) {
        console.log(numeros[i])
        i++
        break; 
    }
    
    console.log(numeros[i])
    i++
}