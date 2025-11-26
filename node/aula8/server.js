const express = require('express')
const app = express();

app.use(express.urlencoded({extended: true}))

app.post('/', (req, res) => {
  console.log(req.body);
  const { nome, nomeOutro } = req.body

  res.send(`Recebi os formulario: ${nome} e ${nomeOutro} `);
});

app.get('/teste/:idUsuarios', (req, res) => {

    res.send(`
        <form action='/' method='POST'>
            Nome do cliente: <input type='text' name='nome'> <br>
            Nome do outro cliente: <input type='text' name='nomeOutro'> <br>
            <button>Enviar</button>
        </form>
        `)
})

// app.get('/teste', (req, res) => {
//   res.send(`oii /teste = ${req.params}`)
// });




app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});