// fetch()
// .then(json => carregaElementosPagina(json))
axios('pessoas.json')
.then(resposta => carregaElementosPagina(resposta.data))

function criarLi(p) {
  const div = document.querySelector('.resultado')
  const ul = document.createElement('ul')
  ul.innerHTML = 'Users'
  for(let vc in p) {
    const li = document.createElement('li')
    // console.log()
    for(let v of vc) {
      
      li.innerHTML = vc + `: ${p[vc]}`
    }
    ul.appendChild(li)
  }
  // li.innerHTML += v.empresa
  div.appendChild(ul)    
}

function carregaElementosPagina(json) {
  
  // console.log(json[1])
  
  for (let valor in json) {
    if (valor === '2') return
    const v = json[valor]

    criarLi(v)
  }
}


carregaElementosPagina()

/*

for(let c = 0 ; c <= 10 ; c++ ) {
  
  console.log(json.cpf[c])
  console.log(json.email[c])
  console.log(json.empresa[c])
  console.log(json.estado[c])
  console.log(json.idade[c])
  console.log(json.nome[c])
  console.log(json.salario[c])
  console.log(json.sexo[c])
  
}
*/


