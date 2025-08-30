/* PRINCIPAIS DIFERENÇAS ENTRE VAR, LET E CONST

//  VAR 
    Tem o escopo de função, se declarado dentro de uma funçào so vai existir dentro daquela função.
    Mas ao declarar fora de uma função ela vai para escopo global ( windows no navagador ).
    E variveis criadas com var podem ser acessadas dentro de outros blocos, let e const não.
    Pode ser reatribuída e redefinida (declarar duas vezes não gera erro). var = 1 e depois var = 43.

// LET 
    Let e const já tem escopo de bloco, são variaveis que ao serem declaradas só terão aquela declarasão dentro daquele bloco{}. 
    Mas ao verrificar o seu bloco e não encontrar aquela variavel chamada ela pode voltar um bloco ate achar se for o caso de um aninhamento.
    
    let nome = 'Gabriel';
    console.log(nome)
    if (v) {
        let nome = 'Rodrigo';
        console.log(nome)
        
        if (v) {
            let nome = 'Diego';
            console.log(nome)
            
        }
    }

// CONST 
    Const tambem tem escopo bloco e so pode funcionar dentro daquele bloco.
    Diferente das outras duas const não pode ser reatribuida( se for um objeto ou array seus valores podem ser reatribuidos, mas a variavel em si não ).

*/



let v = true;

let nome = 'Gabriel';
console.log(nome)
if (v) {
    let nome = 'Rodrigo';
    console.log(nome)
    
    if (v) {
        let nome = 'Diego';
        console.log(nome)
        
    }
}