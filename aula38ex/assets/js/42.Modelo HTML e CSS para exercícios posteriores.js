const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosbody = getComputedStyle(document.body)
const backgroundBody = estilosbody.backgroundColor;
const colorBody = estilosbody.color;


for (p of ps) {
    p.style.backgroundColor = backgroundBody
    p.style.colorBody;
}

