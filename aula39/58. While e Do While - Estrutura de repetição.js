// let c = 1
// while ( c < 10) {
//     ++c
//     console.log(c)
// }
// console.log(`òlaaa ${c}`)
function random(min, max) {
    const r = Math.random() * (min, max) + min
    return Math.round(r)
}
const min = 0;
const max = 50;
let rand = random(min, max)

// WHILE
while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}
 
// DO WHILE
do {
    rand = random(min, max)
    console.log(rand)
} while(rand !== 10);


