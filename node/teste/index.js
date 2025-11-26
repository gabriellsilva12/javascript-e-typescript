const express = require('express');
const app = express();
const route = require('./routes')
const port = 3000;

app.use(express.urlencoded({extended:true}))
app.use(route)

app.listen(port, () => {
    console.log('Servidor rodando na porta:', port)
    console.log('Acesse: http://localhost:3000')
}) 


