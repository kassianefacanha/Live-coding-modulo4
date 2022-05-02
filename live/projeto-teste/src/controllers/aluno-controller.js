const bd = require('../infra/bd') //
const Aluno = require('../models/aluno-model')

const aluno = (app) => {
    // POST : CADASTRAR/INSERIR REGISTRO
    app.post('/aluno', function(req, res) {
      const novoAluno = new Aluno(req.body.nome, req.body.email, req.body.senha)
      bd.aluno.push(novoAluno)
      res.json({"novoALUNO": novoAluno})
    })
    // GET : PEGA REGISTRO
    app.get('/aluno', function(req, res) {
      res.json({"MEUBANCO":bd.aluno})
    })
  
    // DELETE: DELETA REGISTRO
    app.delete('/aluno/:nome', function(req, res) {
      const nome = req.params.nome;
      const alunoIndex = bd.aluno.findIndex(aluno=> aluno.nome == nome )

      if(alunoIndex > -1){
        const alunoDeletado = bd.aluno.splice(alunoIndex,1)
        res.json({"alunodeletado": alunoDeletado,
                    "indexAluno": alunoIndex})
      }else{
        res.json("Aluno não encontrado")
      }

    })
    app.put('/aluno/:indentificador', function(req, res){
      const ident = req.params.indentificador; // PEGA PARAMETRO PARA BUSCA
      const body = req.body; // PEGANDO O QUE A ALTERAÇÃO 
      const alunoIndex = bd.aluno.findIndex(aluno=> aluno.nome == ident  || aluno.email == ident ||aluno.senha == ident) // BUSCA PELA LOCALIZAÇÃO DO DADO QUE EU QUERO ALTERAR

      if(alunoIndex > -1){// VERIFICA SE ACHOU A LOCALIZAÇÃO
        const DadoAntigoAluno = bd.aluno[alunoIndex]; // PEGA O DADO DE ACORDO COM A LOCALIZAÇÃO  
        // PASSANDO PELO MODELO NOVAMENTO 
        const DadoAlunoNovo = new Aluno(
          body.nome || DadoAntigoAluno.nome,
          body.email || DadoAntigoAluno.email, 
          body.senha || DadoAntigoAluno.senha,
          DadoAntigoAluno.id
        )
        // FAZ ALTERAÇÃO ENVIANDO O DADO DO ALUNO NOVO 
        const alunoAtualizado = bd.aluno.splice(alunoIndex,1, DadoAlunoNovo)
        //ENVIANDO UMA MENSAGEM Q DEU CERTO
        res.json({"alunoAtualizado": DadoAlunoNovo,
                    "indexAluno": alunoIndex})
      }else{
        res.json("Aluno não encontrado")
      }
    })

    app.get('/aluno/:nome', function(req, res){
      const email = req.params.email
      for(let i = 0; i <= bd.aluno.length; i++ ){//percorrendo meu array meu banco
        if(bd.aluno[i].email == email ){// comparando o parametro q recebo com todos os email q estão no banco
          res.send(bd.aluno[i])//enviando o resultado da comparação
        }
      }
    })






      // const idade = req.params.idade
      // res.json({
      //   "parmt1": nome,
      //   "parmt2": idade
      // } )
  

}

module.exports = aluno;