function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliquebotoes();
        this.cliqueEnter();
    };

    this.cliqueEnter = () => {
        document.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                event.preventDefault()
                this.resultDisplay()
            }
        });
    }

    this.cliquebotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.deleteDisplay();
            if (el.classList.contains('btn-eq')) this.resultDisplay();
        });
    };
    
    this.addNumDisplay = el => this.display.value += el;

    this.clearDisplay = () => this.display.value = '';

    this.deleteDisplay = () => this.display.value = this.display.value.slice(0, -1);

    this.resultDisplay = () => {
        try{
            const conta = eval(this.display.value);
            if (!conta) {
                alert('[ERRO] Conta Inválida.'); 
                return;
            };
            
            this.display.value = conta
        } catch(er) {
            alert('[ERRO] Conta Inválida.');
            this.display.value = '';
            return;
        };
    };
}

const calculadora = new Calculadora()
calculadora.inicia()