



function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function() {

    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.sequencia() === true) return false 

    const cpfParcial = this.cpfLimpo.slice(0,-2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + 2)
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.sequencia = function() {
   const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
   return sequencia === this.cpfLimpo;
}


ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1

    let digito = cpfArray.reduce( (ac , val) => {
        ac += (val * Number(regressivo))
        regressivo--
        return ac
    }, 0)
    digito = 11 - (digito % 11)
    return  digito > 9 ? digito = '0' : String(digito);
}
// const cpf = new ValidaCPF('389.148.871-89')
const cpf = new ValidaCPF('11.111.11-11')

if (cpf.valida()) {
    console.log('Cpf válido')
} else {
    console.log('Cpf inválido')
}

