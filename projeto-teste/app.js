import express from 'express'; //importação do modulo
var app = express(); //instanciei
//verbo http 
// entidade facilitador e aluno
app.get('/facilitador', function(req, res) {
  res.send('aqui é os valores de facilitador')
})
app.get('/aluno', function(req, res) {
  res.send('aqui é os valores de aluno')
})

// rodar servidor na porta 
app.listen(8000,()=>{
  console.log('rodando na porta 8000')
})