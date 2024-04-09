const express = require('express');
const path = require('path');

const app = express();
const port = 3001; // Porta que o servidor irá escutar

// Middleware para servir arquivos estáticos (seus arquivos front-end)
app.use(express.static(path.join(__dirname, 'src')));

// Rota para servir a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});