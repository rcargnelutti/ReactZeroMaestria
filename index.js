const express = require('express')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express()

app.get('/', (req, res) => {
  res.send('Hello  World')
});

app.get('/ola', (req, res) => {
  res.send('Oi eu sou a rota olá')
});

app.listen(PORT, HOST);
