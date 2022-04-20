const { copyFileSync } = require('fs')
const bd = require('../infra/bd') //
const Aluno = require('../models/aluno-model')

const aluno = (app) => {

    app.post('/aluno', function(req, res) {
      const novoAluno = new Aluno(req.body.nome, req.body.email, req.body.senha)
      bd.aluno.push(novoAluno)
      res.json({"novoALUNO": novoAluno})

    })
    app.get('/aluno', function(req, res) {
      res.json({"MEUBANCO":bd.aluno})
    })
    app.get('/aluno/:nome', function(req, res){
      const email = req.params.email
      for(let i = 0; i <= bd.aluno.length; i++ ){//percorrendo meu array meu banco
        if(bd.aluno[i].email == email ){// comparando o parametro q recebo com todos os email q estão no banco
          res.send(bd.aluno[i])//enviando o resultado da comparação
        }
      }
    })

    app.delete('/aluno/:nome', function(req, res) {
      const nome = req.params.nome
      const indexAluno = bd.aluno.findIndex(aluno => aluno.nome == nome) // ACHA O INDEX 

      if(indexAluno > -1){
        const alunoDeletado = bd.aluno.splice(indexAluno, 1)//TIRA DO ARRAY DELETE
        res.json({"Aluno":alunoDeletado })
      }else{
        res.json("ALUNO NÃO ENCONTRADO")
      }

    })







      // const idade = req.params.idade
      // res.json({
      //   "parmt1": nome,
      //   "parmt2": idade
      // } )
  

}

module.exports = aluno;