module.exports = (app) => {
    app.get('/facilitador', (req, res)=> {
        res.send('aqui é os valores de facilitador')
  })
  app.post('/facilitador', function(req, res) {
    res.send('aqui é os valores de facilitador para inserir com post nodemon')

  })
}