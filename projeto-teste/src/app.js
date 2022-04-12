import express from 'express'; //importação do modulo
var app = express(); //instanciei
const FacilitadorController = require('./controllers/facilitador-controller');
const AlunoController = require('./controllers/alunoController');
//verbo http 
// entidade facilitador e aluno
FacilitadorController(app);
AlunoController(app);

// rodar servidor na porta 
app.listen(8000,()=>{
  console.log('rodando na porta 8000')
})