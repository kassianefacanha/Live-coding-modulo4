const express = require('express'); //importação do modulo
var app = express(); //instanciei

//Importação dos modulos criados 
const FacilitadorController = require('./controllers/facilitador-controller')
const AlunoController = require('./controllers/aluno-controller')

//body-parser
app.use(express.json())

FacilitadorController(app)
AlunoController(app)

// rodar servidor na porta 
app.listen(8000,()=>{
  console.log('rodando na porta 8000')
})

// npm install nodemon --save-dev (LOCALMENTE) Execultando com script
// npm install nodemon -g (GLOBALMENTE) Execulta no terminal

// const Aluno = require('./models/aluno-model')
// const novoAluno = new Aluno("Kassiane", "kassi@exm.com", "12345")
// console.log(novoAluno)
