function criaCalculadora() {
    return {
        display: document.querySelector('.display'),


        iniciaCalculadora() {
            this.cliqueBotoes()
            this.cliqueEnter()
        },
        cliqueEnter() {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault()
                    this.resultadoFinal()
                }
            })
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('btn-num')) {
                    this.escreverInput(el.innerText)
                }
                if (el.classList.contains('btn-clear')) {
                    this.limparInput()
                }
                if (el.classList.contains('btn-del')) {
                    this.display.value = this.display.value.slice(0, -1)
                }
                if (el.classList.contains('btn-eq')) {
                    this.resultadoFinal()
                }
            })
        },

        escreverInput(num) {
            this.display.value += num
        },

        limparInput() {
            this.display.value = ''
        },

        resultadoFinal() {
            let valores = this.display.value
            this.display.value = eval(valores)
        }

    }
}

const calculadora = criaCalculadora()
calculadora.iniciaCalculadora()



