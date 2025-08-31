valores = (v) => {
    if (v % 3 === 0 && v % 5 === 0) return `FizzBuzz`
    if (v % 3 === 0) return `Fizz`
    if (v % 5 === 0) return `Buzz`
    if (typeof v !== `number`) return v
    return v
}

console.log(valores('a'))

for (c = 0 ;c <= 100 ; c++) {
    console.log(c, valores(c))
}