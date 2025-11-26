
/*389.148.871-89
 
     3  8  9  1  4  8  8  7  1 
    10  9  8  7  6  5  4  3  2

     3  8  9  1  4  8  8  7  1  8
    11 10  9  8  7  6  5  4  3  2
 
    11 - (resto % 11) = 
*/


export class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }


    sequencia() {
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
    }


    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1

        for (let numeros of cpfSemDigitos) {
            total += Number(numeros) * reverso
            // console.log(numeros, reverso, total )
            reverso--
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length < 11) return false;
        if (this.sequencia()) return false;
        this.geraNovoCpf()
        
        return this.novoCpf === this.cpfLimpo
    }

}


const validaCpf = new ValidaCpf('389.148.871-89')

if (validaCpf.valida()) {
    console.log('CPF Válido')
} else {
    console.log('CPF Inválido')
}
