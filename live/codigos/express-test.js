import express from 'express'; //importação do modulo
var app = express(); //instanciei
//verbo http 
// entidade usuario e tarefa
app.get('/usuario', function(req, res) {
  res.send('aqui é os valores de usuario')
})
app.get('/tarefa', function(req, res) {
  res.send('aqui é os valores de tarefa')
})

// rodar servidor na porta 
app.listen(8000,()=>{
  console.log('rodando na porta 8000')
})