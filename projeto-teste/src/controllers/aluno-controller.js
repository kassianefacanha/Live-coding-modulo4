module.exports = (app) => {
    app.get('/aluno', function(req, res) {
        res.send('aqui é os valores de aluno ler os arquivos get nodemon')

      })
    app.post('/aluno', function(req, res) {
        res.send('aqui é os valores de aluno para inserir com post nodemon')

      })
}