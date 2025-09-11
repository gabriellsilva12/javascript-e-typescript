setTimeout(() => {
    console.log(`Preparar...`)
}, 2000) 

let time = 1
const contagem = setInterval(() => {
    console.log(time)
    time++
}, 1000);


clearInterval (setTimeout(() => {
    clearInterval(contagem) 
}, 10000), 4000);






