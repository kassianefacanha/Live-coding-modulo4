import express from 'express'; //importação do modulo
var app = express(); //instanciei
//verbo http 
app.get('/', function(req, res) {
  res.send('hello world')
})

// rodar servidor na porta 
app.listen(8000,()=>{
  console.log('rodando na porta 8000')
})