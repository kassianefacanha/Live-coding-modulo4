module.exports = (app) => {
    app.get('/facilitador', (req, res)=> {
        res.send('aqui é os valores de facilitador')
  })
}