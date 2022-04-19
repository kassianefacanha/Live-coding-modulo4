const bd = require('../infra/bd') //
const Aluno = require('../models/aluno-model')

const aluno = (app) => {

    app.post('/aluno', function(req, res) {
      const body = req.body; // pegar o corpo da req
      const novoAluno = new Aluno(body.nome, body.email, body.senha) //passando para o modelo para validar
      // logica para inserir cliente
       bd.aluno.push(novoAluno);
       // mandar mensagem
       console.log(novoAluno);
       res.send({"NovoAluno": novoAluno});
    })
    app.get('/aluno', function(req, res) {
      res.json({"alunos": bd.aluno})
    })
}

module.exports = aluno;