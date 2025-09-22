function CriaCalculadora() {

    this.display = document.querySelector('.display');
    
    this.iniciaCalculadora = () => {
        this.cliqueBotoes()
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                this.adicionarNumeros(el.innerText)
            }
            if (el.classList.contains('btn-clear')) {
                this.limparInput()
            }
            if (el.classList.contains('btn-del')) {
                this.removerNumero()
            }
            if (el.classList.contains('btn-eq')) {
                this.resultadoFinal()
            }
        })
    };

    this.adicionarNumeros = (num) => {
        this.display.value += num
    };
    this.removerNumero = () => {
        this.display.value = this.display.value.slice(0, -1)
    };
    this.limparInput = () => {
        this.display.value = ''
    };
    this.resultadoFinal = () => {
        this.display.value = eval(this.display.value)
    };
}

let calculadora = new CriaCalculadora()
calculadora.iniciaCalculadora()



