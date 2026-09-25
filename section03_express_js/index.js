const express = require('express')
const app = express()
const port = 4000

// Rota raiz
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

// Rota
app.get('/usuarios', (req, res) => {
    res.send('<h1>Lista de usuários</h1>')
})

// Rota
app.get('/sobre', (req, res) => {
    res.send('<h1>Sobre o projeto</h1>')
})

// Parâmetros obrigatórios
app.get('/ola/:nome/:saudacao', (req, res) => {
    // REQ => São os dados enviados pelo usuário, seja parâmetros, query string, body, headers, etc.
    // RES => São os dados enviados pelo servidor para o usuário
    const nome = req.params.nome
    const saudacao = req.params.saudacao
    res.send(`<h1>${saudacao}, ${nome}</h1>`)
})

// Parâmetros opcionais
// No Express 5, segmentos opcionais devem ser declarados com chaves {}: /blog{/:titulo}.
app.get('/blog{/:titulo}', (req, res) => {
    const titulo = req.params.titulo
    if (titulo) {
        res.send(`<h1>${titulo}</h1>`)
    } else {
        res.send(`<h1>Blog</h1>`)
    }
})

app.get('/canal/youtube', (req, res) => {
    var canal = req.query.canal
    if (canal) {
        res.send(`<h1>Canal do youtube: ${canal}</h1>`)
    } else {
        res.send(`<h1>Canal do youtube não foi informado</h1>`)
    }
})

// Carregamento do servidor sempre por último
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
