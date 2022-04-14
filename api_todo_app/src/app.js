const express = require('express');
const usuariosController = require('./controllers/usuarios-controller');
const tarefasController = require('./controllers/tarefas-controller');

const port = 8000;
const app = express();

usuariosController(app);
tarefasController(app)

app.listen(port, ()=>console.log(`[INFO]: Servidor rodando em localhost:${port}`))
