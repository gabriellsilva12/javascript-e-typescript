// FUNÇÕES IMEDIATAS
/* IIFE > IMEDIATELY INVOKED FUNCTION EXPRESSION
   O QUE É UMA FUNÇÃO IMEDIATA? UMA FUNCAO IMEDIATA (IIFE) É UMA FUNCAO QUE SE EXECUTA ASSIM QUE É CRIADA, SEM PRECISAR SER CHAMADA DEPOIS EM UM ESCOPO GLOBAL, MAS QUE PODE SER CHAMADA DENTRO DO SEU PROPRIO ESCOPO.

   EXEMPLO:

   (function() {    // FUNCAO IMEDIATA CRIADA
        TUDO QUE ESTIVER AQUI DENTRO SERA EXECUTADO IMEDIATAMENTE
   })()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

   (function () {
       const nome = 'Gabriel' // AQUI A VARIAVEL NOME SO TEM ESSE VALOR ('Gabriel') DENTRO DA FUNCAO IMEDIATA 
       console.log(nome) // Gabriel
   })()
   const nome = 'Silva' // ESCOPO GLOBAL, AQUI NOME RECEBE OUTRO VALOR ('Silva'),
   console.log(nome)
*/

(function (nome, idade) {
        
    function falaOi() {
        const nome = 'Gabriel' // CLOSURES

        return function() {
            
            console.log(nome)// ESCOPO LÉXICO
        }
    }    
    const funcao = falaOi()
    funcao()
})('Gabriel', 22)