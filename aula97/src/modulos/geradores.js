const simbolos = '!@#$%^&*()_+-={}|[]:;></~.,'
const n = () => { return String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48))}
const L = () => { return String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65))}
const Lm = () => { return String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97))}
const sim = () => { return simbolos[Math.floor(Math.random() * (simbolos.length - 0) + 0)]}




export default function geraSenha(qtd, maisculas, minusculas, numeros, simbolos) {
    
    const senhaArray = [];
    qtd = Number(qtd)
    
    for(let c = 0; c < qtd; c++) {
        maisculas && senhaArray.push(L())
        minusculas && senhaArray.push(Lm())
        numeros && senhaArray.push(n())
        simbolos && senhaArray.push(sim())
    }
    
    return senhaArray.join('').slice(0, qtd)
}


geraSenha()