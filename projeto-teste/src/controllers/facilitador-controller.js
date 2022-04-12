module.exports = (app) => {
    //criação do meu modulo
    app.get('/facilitador', (req, res)=> {
        res.send('aqui é os valores de facilitador')
      })
}