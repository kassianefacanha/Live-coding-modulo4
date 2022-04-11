var express = require('express');
var app = express();

// ENTIDADE (usuario, tarefas)
app.get('/usuario', function(req, res) {
  res.send('Rota ativada com GET e recurso usuario: valores de usuario devem ser retornados')
})
app.get('/tarefas', function(req, res) {
  res.send('Rota ativada com GET e recurso tarefas: valores de tarefas devem ser retornados')
})

app.listen(8000,()=>{
  console.log('rodando na porta 8000')
})