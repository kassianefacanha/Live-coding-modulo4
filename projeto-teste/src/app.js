const express = require('express'); //importação do modulo
var app = express(); //instanciei

//Importação dos modulos criados 
const FacilitadorController = require('./controllers/facilitador-controller')
const AlunoController = require('./controllers/aluno-controller')


FacilitadorController(app)
AlunoController(app)

// rodar servidor na porta 
app.listen(8000,()=>{
  console.log('rodando na porta 8000')
})

// npm install nodemon --save-dev (LOCALMENTE) Execultando com script
// npm install nodemon -g (GLOBALMENTE) Execulta no terminal