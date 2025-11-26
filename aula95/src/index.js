import { nome as nome2,soma,sobrenome,idade} from './modulo1' // 'as' renomeia o que esta sendo importado
import defaultSoma, { Pessoa } from './modulo1'

const nome = 'luiz'

console.log(defaultSoma(10, 20))

const pessoa = new Pessoa('gabriel', 'silva', 22)
console.log(pessoa.apresenta())
console.log(pessoa)

console.log(soma(1,2))
alert(`Oláaaaaa me chamo ${nome2} ${sobrenome}, tenho ${idade} anos.`)