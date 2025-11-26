import ValidaCPF from './validaCPF';

export default class geraCPF {

    rand(min = 10000000, max = 99999999) {
        return String(Math.floor(Math.random() * (max - min) + max));
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11) 
        )
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        const novoCPF = cpfSemDigitos + digito1 + digito2;
        const n = this.formatado(novoCPF)
        return n;
    }

}