/*  APRENDENDO DOM

    O QUE É DOM?
    - DOM significa Document Object Model.
    - É como se fosse uma "representação viva" do site dentro do navegador.
    - Cada parte da página (texto, imagens, botões, etc.) vira um objeto
      que o JavaScript consegue acessar e modificar.
    - A partir do momento que você trás um elemento do html para JavaScript, ela se torna um objeto que tem propriedades e métodos para mexer nele.
    ex: let p = document.getElementById("msg");
        p.style.color = "blue";

    PARA QUE SERVE?
    - Permite que a gente mude o conteúdo, o estilo e o comportamento 
      da página enquanto ela está aberta.
    - Exemplo: trocar texto, mudar cor, esconder/mostrar elementos, 
      criar coisas novas na página.

    RESUMINDO:
    - Pense no DOM como uma "árvore" que mostra todos os elementos da página.
    - O JavaScript pode subir, descer e mexer nos "galhos" dessa árvore.
    
*/