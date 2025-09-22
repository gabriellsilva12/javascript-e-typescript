// MÉTODO SPLICE
/*.splice( indice atual, deletado, elem1, elem2, elem3 )
                  -4        -3        -2        -1  // INDICE NEGATIVOS
                   0         1         2         3  // INDICE POSITIVO
const nomes = [ 'Maria' , 'João' , 'Tiago' , 'Gabriel' ]


• REMOVENDO INDICE COM .splice()
    nomes.splice( 1, 2 ) // AQUI ELE ESTA PEGANDO O INDICE 1('JOÃO'), E REMOVENDO 'JOÃO' E MAIS UM, NO CASO 'TIAGO'.  
    [ 'Maria' , 'Gabriel' ]

    • REMOVENDO COM NUMEROS NEGATIVOS
    nomes.splice( -2, 2 ) // AQUI ELE ESTA PEGANDO O INDICE -2('TIAGO'), E REMOVENDO 'TIAGO' E 'GABRIEL'.
    [ 'Maria' , 'João' ]


• ADICIONANDO ELEMENTOS COM .splice()    
    nomes.splice( 2, 0, 'Luiz') // AQUI EU ADICIONEI NO INDICE 2 O O ELEMENTO 'Luiz'
    [ 'Maria' , 'João' , 'Luiz' , 'Tiago' , 'Gabriel' ] 

    • REMOVENDO E ADICIONANDO ELEMENTOS
    nomes.splice(3, 2, 'Luiz', 'Otavio') // AQUI ELE ESTA PEGANDO O INDICE 3, REMOVENDO 1 ELEMENTO('GABRIEL') E ADICIONANDO 'Luiz' E 'Otavio'.

*/
const nomes = [ 'Maria' , 'João' , 'Tiago' , 'Gabriel' ]
const removidos = nomes.splice( 1, 1, 'luiz')
console.log(nomes, removidos)