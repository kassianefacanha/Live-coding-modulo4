const express = require('express');
const usuariosController = require('./controllers/usuarios-controller');
//const tarefasController = require('./controllers/tarefas-controller');

const port = 8080;

const app = express();

usuariosController(app);

app.listen(port, ()=>console.log(`[INFO]: Servidor rodando em localhost:${port}`))
