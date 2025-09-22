// O QUE É UM FUNÇÃO RECURSIVA? É UMA FUNÇÃO NORMAL QUE CHAMA A SI MESMA DENTRO DELA, ELA PRECISA TER UM LIMITE( UMA CONDIÇÃO DE PARADA), SENÃO ELA FICA SE CHAMANDO INFINITAMENTE. ELA É BEM PARECIDA COM UM WHILE 
// Uma função recursiva é uma função normal que chama a si mesma dentro dela. Ela precisa ter um limite (condição de parada), senão nunca vai parar de se chamar — é parecido com um while
function recursiva(max) {
    console.log(max);
    if (max >= 10) return; // CONDIÇÃO DE PARADA
    max++; // 0 RECEBE +1
    recursiva(max); // CHAMANDO A SI MESMA
}

recursiva(0) // COMEÇA EM 0