let n1 = Number(prompt(`Digite um numero:`))
let raiz = Math.sqrt(n1)


document.body.innerHTML = `<p><strong>Seu numero é ${n1}</strong>`
document.body.innerHTML += `<p><strong>${n1} é inteiro? ${Number.isInteger(n1)}</strong>`
document.body.innerHTML += `<p><strong>${n1} é NaN? ${Number.isNaN(n1)}</strong>`
document.body.innerHTML += `<p><strong>Arredondando para baixo: ${Math.floor(n1)}</strong>`
document.body.innerHTML += `<p><strong>Arredondando para cima: ${Math.ceil(n1)}</strong>`
document.body.innerHTML += `<p><strong>Com duas casas decimais: ${n1.toFixed(2)}</strong>`

