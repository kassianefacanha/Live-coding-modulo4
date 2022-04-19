const express = require('express'); //importação do modulo
var app = express(); //instanciei

//body-parser
app.use(express.json())

//Importação dos modulos criados 
const FacilitadorController = require('./controllers/facilitador-controller')
const AlunoController = require('./controllers/aluno-controller')

// const Aluno = require('./models/aluno-model.js')//importando o modelo 
// const nAluno = new Aluno("Kassiane", "kassi@exemple.com", "123456") //cad 
// console.log(nAluno)//imprimindo

const bd = require('./infra/bd')

FacilitadorController(app, bd)
AlunoController(app, bd)

// rodar servidor na porta 
app.listen(8000,()=>{
  console.log('rodando na porta 8000')
})

// npm install nodemon --save-dev (LOCALMENTE) Execultando com script
// npm install nodemon -g (GLOBALMENTE) Execulta no terminal