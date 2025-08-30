// let newHora = new Date()
// let hora = newHora.getHours()
let hora = 18.1
if (hora > 0 && hora <= 12) {
    console.log(`Bom dia!`)
} else if (hora >= 12 && hora <= 18) {
    console.log(`Boa tarde!`)
} else if (hora >= 18 && hora <= 23){
    console.log(`Boa noite!`)
}