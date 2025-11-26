import'./assets/css/style.css';

import geraCPF from './modulos/geraCPF.js'; 



(function() {
    const gera = new geraCPF();
    const novo = gera.geraNovoCpf()
    const cpfGerado = document.querySelector('.resultado');
    cpfGerado.innerHTML = novo;
})(); 