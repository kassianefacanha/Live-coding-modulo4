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


    app.get('/aluno/:nome/:idade', function(req, res) {
      res.json({"Aluno ": req.params.nome,
      "Idade ": req.params.idade})
    })

    app.delete('/aluno/:nome', function(req, res){
      const nomeParametro = req.params.nome;
      const indexAluno = bd.aluno.findIndex(aluno=>aluno.nome == nomeParametro)

      if(indexAluno > -1){
        const alunoDeletado = bd.aluno.splice(indexAluno, 1)
        res.json({"Aluno": alunoDeletado})
      }else{
        res.json("Aluno não encontrado")
      }

    })
}

module.exports = aluno;