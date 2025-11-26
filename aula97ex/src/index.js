import './assets/css/style.css';

class geraSenha {

    create() {
        this.clickButton()
        // const senha = document.querySelector('.senha')
        // senha.innerHTML = ''
    }

    clickButton() {
        const button = document.querySelector('#button')
        button.addEventListener('click', () => {
            this.criaSenha()
            // console.log(num)
            // if(num) return alert('olaaa')
        })
    }

    criaSenha() {
        const num = document.querySelector('#numeros').checked;
        const sim = document.querySelector('#simbolos').checked;
        const maiu = document.querySelector('#maisculas').checked;
        const min = document.querySelector('#minusculas').checked;
        const numimp = Number(document.querySelector('#numeroinput').value);

        const senha = this.verificaChecked(num, sim, maiu, min, numimp)
        const inputsenha = document.querySelector('.senha')
        inputsenha.innerHTML = senha
    }
    verificaChecked(num, sim, maiu, min, numimp) {
        const nv = {
            numeros: '0123456789',
            letrasMaiusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            letrasMinusculas: 'abcdefghijklmnopqrstuvwxyz',
            simbolos: '!@#$%^&*',
        }

        let senha = ''
        const valores = []
        
        for (let i = 0; i < numimp; i++) {

            const nu = nv.numeros[this.rand(nv.numeros)]
            const si = nv.simbolos[this.rand(nv.simbolos)]
            const ma = nv.letrasMaiusculas[this.rand(nv.letrasMaiusculas)]
            const mi = nv.letrasMinusculas[this.rand(nv.letrasMinusculas)]
            
            if (num || sim || maiu || min) {
                if(num && sim && maiu && min) valores.push(ma, nu, si, mi)

                else if(num && sim && maiu) valores.push(ma ,nu, si)
                else if(num && sim && min) valores.push(mi ,nu, si)

                else if(num && min && maiu) valores.push(ma ,nu, mi)
                else if(num && maiu && min) valores.push(mi ,nu, ma)
                
                else if(num && sim) valores.push(nu, si)
                else if(num && maiu) valores.push(nu, ma)
                else if(num && min) valores.push(nu, mi)

                else if(num) valores.push(nu)
                else if(sim) valores.push(si)
                else if(maiu) valores.push(ma)
                else if(min) valores.push(mi)
            }
        }
        senha += valores.slice(0, numimp)
        console.log(valores)
        return senha.replaceAll(",", "")
    }
    rand(numeros) {
        const rand = Math.floor(Math.random() * numeros.length)
        return rand
    }

    createP() {
        const p = document.createElement('p')
        p.className.add('senhaP')
        return p
    }
}

const senha = new geraSenha()
senha.create()