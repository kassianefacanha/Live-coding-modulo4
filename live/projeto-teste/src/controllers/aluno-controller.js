const Aluno = require('../models/aluno-model');

const aluno = (app, bd) => {
    app.get('/aluno', function(req, res) {
        // res.send('aqui é os valores de aluno ler os arquivos get nodemon')
        res.json({"alunos": bd.aluno})
      })
    app.post('/aluno', function(req, res) {
      // let nome = req.body.nome;
      // let senha = req.body.senha;
      // let body = req.body;
      // // res.send('O nome do aluno é: ' +nome+ '  e sua senha é: ' + senha);
      // res.json({"NovoAluno": body})
      // try{
      // variavel que recebe meu corpo 
        const body = req.body 
      //passando para meu modelo o meu corpo 
        const novoAluno = new Aluno(body.nome, body.email, body.senha)
      //inserção da minha entidade no array
        bd.aluno.push(novoAluno)
        //informação
        console.log(bd.aluno)
  
        // res.json({"NovoAluno": novoAluno,
        //           "meu banco": bd.aluno,
        //             "erro": false
        //           })
  
        
      // }catch (error) {
      //   res.json({"messsage": error,
      //   "erro": true
      // })

      // }
     
      })
}
module.exports = aluno;