
// GET
exports.usuariosGet = (req,res) => {
    res.send(`
        <form action='/test/user' method='POST'>
            Olá, digite seu nome: 
            <input type='text' name='nome'>
            
            <button>OK</button>
        </form>
    `)
}

//POST
exports.usuariosPost = (req,res) => {
    res.send(`
        Olá, você acessou o testePost ${req.body.nome}    
    `)
}