let buttonform = document.querySelector(`#buttonform`)
buttonform.addEventListener("click", clicar)

function criarP() {
    return p = document.createElement('p');
}

function criandoRes() {
    let res = document.querySelector('#res');
    res.innerHTML = ``;
    return res;
}

function classP(a) {
    return a.classList.add('resultado');
}
    
function nivelimc(imc) {
    let niveis = ['Abaixo do peso','Peso Normal','Sobrepeso','Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3']
    
    // <p>Menos do que 18.5</p>
    // <p>Entre 18.5 e 24.9</p>
    // <p>Entre 25 e 29.9</p>
    // <p>Entre 30 e 34.9</p>
    // <p>Entre 35 e 39.9</p>
    // <p>Mais do que 40</p>

    if (imc > 39.9) return niveis[5];
    if (imc >= 34.9) return niveis[4];
    if (imc >= 34.9) return niveis[3];
    if (imc >= 29.9) return niveis[2];
    if (imc >= 24.9) return niveis[1];
    if (imc < 18.5) return niveis[0];
}

function getimc(peso,altura) {
    let imc = peso / (altura ** 2)
    return imc.toFixed(2)
}

function resultado(alt,pes) {

    let p = criarP();
    classP(p);

    if (!alt || !pes) {
        p.innerHTML = `Peso ou altura invalida...`
        criandoRes().appendChild(p)
        return;
    } else {
        p.innerHTML = `Seu imc é de ${getimc(pes, alt)}, e você está com ${nivelimc(getimc(pes,alt))}`;
        criandoRes().appendChild(p);
    }
}



function clicar() {

    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);

    resultado(altura, peso);
}