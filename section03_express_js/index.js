const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/usuarios', (req, res) => {
    res.send('Lista de usuários')
})

app.get('/sobre', (req, res) => {
    res.send('Sobre o projeto')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
