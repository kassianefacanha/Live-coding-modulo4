import express from 'express';
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World')
})


app.listen(8000,()=>{
  console.log('rodando na porta 8000')
})