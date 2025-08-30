let buttonform = document.querySelector(`#buttonform`)
buttonform.addEventListener("click", clicar)

function clicar() {
    let peso = Number(document.querySelector(`#peso`).value);
    let altura = Number(document.querySelector(`#altura`).value);
    let divres = document.querySelector(`#res`);
    let res = document.createElement(`p`);

    let imc = peso / (altura * altura)
    
    divres.innerHTML = ``
    res.style.textAlign = `center`
    res.style.fontSize = `25px`
    res.style.padding = `20px 0px`
    res.style.backgroundColor = `#28d628`


    console.log(imc)
    console.log(typeof altura)
    console.log(typeof peso)
    if (altura == 0 || peso == 0) {
        res.innerHTML = `<strong>[ERRO] Altura ou Peso inválido.</strong>`
        divres.appendChild(res)
        res.style.backgroundColor = `white`
        res.style.color = `red`
    } else if (imc < 18.5) {
        res.innerHTML = `Seu <strong>IMC</strong> é de <strong>${imc.toFixed(2)} (Abaixo do peso)</strong>`
        divres.appendChild(res)
        res.style.backgroundColor = `#eaea23`
    } else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = `Seu <strong>IMC</strong> é de <strong>${imc.toFixed(2)} (Peso normal)</strong>`
        divres.appendChild(res)
        res.style.backgroundColor = `#28d628`
    } else if (imc >= 25 && imc <= 29.9 ) {
        res.innerHTML = `Seu <strong>IMC</strong> é de <strong>${imc.toFixed(2)} (Sobrepeso)</strong>`
        res.style.backgroundColor = `#ea7d7d`
        divres.appendChild(res)
    } else if (imc >= 30 && imc <= 34.9) {
        res.innerHTML = `Seu <strong>IMC</strong> é de <strong>${imc.toFixed(2)} (Obesidade Grau 1)</strong>`
        res.style.backgroundColor = `#f85858`
        divres.appendChild(res)
    } else if (imc >= 35 && imc <= 39.9) {
        res.innerHTML = `Seu <strong>IMC</strong> é de <strong>${imc.toFixed(2)} (Obesidade Grau 2)</strong>`
        res.style.backgroundColor = `#ff4242`
        divres.appendChild(res)
    } else {
        res.innerHTML = `Seu <strong>IMC</strong> é de <strong>${imc.toFixed(2)} (Obesidade Grau 3)</strong>`
        res.style.backgroundColor = `#ff0000`
        divres.appendChild(res)
    }
    


}