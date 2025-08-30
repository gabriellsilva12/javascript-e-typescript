// let c = 1
// while ( c < 10) {
//     ++c
//     console.log(c)
// }
// console.log(`òlaaa ${c}`)
function random(min, max) {
    const r = Math.random() * (min, max) + min
    return r
}
const v = random(1,10)
console.log(v)
console.log(Math.round(v))
