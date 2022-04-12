module.exports = (app) => {
    //criação do meu modulo
    app.get('/aluno', function(req, res) {
        res.send('aqui é os valores de aluno')
      })
}