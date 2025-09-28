// superclass

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor ) {
        console.log(`Saldo insuficiente: R$${this.saldo}`)
        return 
    }
    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function() {
    console.log(`AG/C: ${this.agencia} / ${this.conta} | Saldo: $${this.saldo.toFixed(2)}`)
}



function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo}`)
        return;
    }
    this.saldo -= valor
    this.verSaldo()
}

function Cp(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}
Cp.prototype = Object.create(Conta.prototype)
Cp.prototype.constructor = ContaCorrente

const conta2 = new ContaCorrente(11, 22, 0, 100)
conta2.depositar(10)
conta2.sacar(110)
conta2.sacar(1)
console.log('////////////////////////////////')
const contaCP = new Cp(12, 33, 0)
contaCP.depositar(10)
contaCP.sacar(110)
contaCP.sacar(1)



const conta1 = new Conta(11, 22, 10)
// conta1.depositar(20)
// conta1.sacar(40)