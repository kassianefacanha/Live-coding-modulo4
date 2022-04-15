module.exports = (app) => {
    app.get('/tarefa', (req, res) => {
        res.send('Dados de tarefa')
      })
}
