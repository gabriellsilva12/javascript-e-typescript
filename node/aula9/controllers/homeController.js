// GET
exports.paginaInicial = (req,res) => {
    res.send(`
    <form action='/teste' method='POST'>
        Nome do cliente: <input type='text' name='nome'> <br>
        Nome do outro cliente: <input type='text' name='nomeOutro'> <br>
        <button>Enviar</button>
    </form>
    `)
};

// POST
exports.tratarPost = (req, res) => {
    res.send(req.body.nome + ' ' + req.body.nomeOutro)
};



 
