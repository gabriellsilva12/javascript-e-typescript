
const elementos = [ 
    {tag: 'p',texto: 'Frase 1'},
    {tag: 'div',texto: 'Frase 2'},
    {tag: 'footer',texto: 'Frase 3'},
    {tag: 'section',texto: 'Frase 4'}
]

const containe = document.querySelector(`.container`);

for ( c = 0; c < elementos.length; c++ ) {

    
    const { tag, texto } = elementos[c];
    let pp = document.createElement(tag)
    let tt = document.createTextNode(texto)

    pp.innerHTML += `${tag}`;
    containe.appendChild(pp);    
}

// for ( c = 0; c < elementos.length; c++ ) {

//     let pp = document.createElement(`${elementos[c].tag}`)

//     pp.innerHTML = `elementos[c].tag${elementos[c].texto}`;
//     containe.appendChild(pp);    
// }