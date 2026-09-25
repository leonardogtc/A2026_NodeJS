const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/usuarios', (req, res) => {
    res.send('<h1>Lista de usuários</h1>')
})

app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre o projeto</h1>')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
