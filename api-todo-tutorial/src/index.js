// TODO organizador
// API
// Usuario e Tarefas - Entidades

const express = require('express');
const app = express();
// const cors = require('cors');
//IMPORTANDO banco
const bd =  require('./infra/sqlite-db');


// IMPORTANDO NOSSOS CONTROLLERS 
const Usuario = require('./controllers/usuario-controller')
const Tarefa = require('./controllers/tarefa-controller')

// app.use(cors())

app.use(express.json())

Usuario(app, bd)
Tarefa(app, bd)



app.listen(3000, ()=>{
  console.log("rodando servidor na porta 3000")
})
