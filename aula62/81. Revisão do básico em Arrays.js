/* 
• MANEIRAS DE CRIAR UM ARRAY.
    const nomes = ['Gabriel','Tiago','Luiz']  // ARRAY LITERAL
    const nomes = new Array('Gabriel','Tiago','Luiz')  // CONSTRUTOR DO ARRAY
  
    
• ARRAYS SÃO INDEXADOS.
     0          1          2
['Gabriel', 'Carvalho', 'Silva']
    

• ARRAYS TAMBEM PODEM SER ALTERADOS.
    const nomes = ['Gabriel','Tiago','Luiz']
    
    nomes[2] = 'Silva' // AGORA NO INDICE 2 DE NOMES SAIU 'LUIZ' E ENTROU 'SILVA'
    delete nomes[2]; // IRA DELETAR O INDICE 2 'SILVA', E O ESPAÇO ONDE ESTAVA O INDICE IRAR FICAR EM BRANCO.
    nomes.length // IRAR ME MOSTRAR O TAMANHO DO ARRAY.
    nomes.shift() // REMOVER O PRIMEIRO INDICE DO ARRAY, MAS ELE MUDA O INDICE DE TODOS OS OUTROS ELEMENTOS.
    nomes.unshift() // ADICIONA UM ELEMENTO NO INICIO DO ARRAY, MAS ELE MUDA O INDICE DE TODOS OS OUTROS ELEMENTOS.
    nomes.push() // ADICIONA UM ELEMENTO NO FINAL DO ARRAY.
    nomes.pop() // REMOVER O ULTIMO INDICE DE MEU ARRAY.
    const removido = nomes.pop() // ESTOU REMOVENDO ULTIMO INDICE E JOGANDO DENTRO DE UMA VARIAVEL O INDICE REMOVIDO.
    nomes.slice(0, 3) // ME MOSTRARA A PARTIR DO INDICE 0 ATÉ O INDICE 2, ELE NÃO MOSTRARA O INDICE 3.
    nomes.slice(0, -1) // ME MOSTRARA TODOS OS INDICES, MAS IRAR REMOVER O ULTIMO INDICE DO ARRAY.
    
    • CONVERTENDO STRING EM ARRAY.
    const nome = 'Gabriel Carvalho da Silva'
    const novo = nome.split(' ') // SPLIT ESTA SEPARANDO A MINHA STRING NOME POR ESPAÇO(' ') E CRIANDO UM ARRAY.
    console.log(novo) // [ 'Gabriel', 'Carvalho', 'da', 'Silva' ]

    • CONVERTENDO ARRAY EM STRING.
    const nome = ['Gabriel', 'Carvalho', 'Silva']
    const novo = nome.join(' ') // JOIN ESTÁ PEGANDO O MEU ARRAY, CONVERTENDO EM STRING E SEPARANDO ELE POR ESPAÇO(' ').
    console.log(novo)



• VALORES POR REFERÊNCIA.
    const nomes = ['Gabriel','Tiago','Luiz']
    cont novosNomes = nomes;
    novoNomes.pop()  // NESSE MOMENTO nomes TAMBEM FOI MODIFICADO JUNTO COM novosNomes, POIS ELES ESTÃO LIGADOS UM AO OUTRO.

    • SPREAD OPERATOR 
    const nomes = ['Gabriel','Tiago','Luiz']
    cont novosNomes = [...nomes]; // NESSE MOMENTO UTILIZANDO O SPREAD OPERATOR EU ESTOU FAZENDO UMA COPIA DE nomes PARA DENTRO DE novosNomes.
    novoNomes.pop() // AQUI MESMO REMOVENDO O ULTIMO INDICE DE novosNomes A VARIAVEL nomes CONTINUA DO MESMO JEITO, POIS novosNomes NÃO ESTA MAIS LIGADA A ELA.
*/

   
   
const nome = ['Gabriel', 'Carvalho', 'Silva']
const novo = nome.join(' ')
console.log(novo)