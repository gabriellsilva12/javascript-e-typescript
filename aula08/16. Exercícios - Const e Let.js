const datat = new Date()
const data = datat.getFullYear()

const nome = `Gabriel`;
const sobreNome = `Silva`;
const idade = 23;
const peso = 60
const altura = 1.63
let imc;
imc = peso / (altura * altura)

let anoNascimento = data - idade



console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}Kg tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`)
console.log(`${anoNascimento}`)