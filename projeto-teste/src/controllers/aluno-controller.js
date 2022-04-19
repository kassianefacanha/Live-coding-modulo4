
module.exports = (app) => {
    app.get('/aluno', function(req, res) {
        // res.send('aqui é os valores de aluno ler os arquivos get nodemon')
        res.json({"alunos": bd.aluno})
      })
    app.post('/aluno', function(req, res) {
      // let nome = req.body.nome;
      // let senha = req.body.senha;
      let body = req.body;
      // res.send('O nome do aluno é: ' +nome+ '  e sua senha é: ' + senha);
      res.json({"NovoAluno": body})
    })
}
