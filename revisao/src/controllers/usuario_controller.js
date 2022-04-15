
module.exports = (app)=>{
    app.get('/usuario', (req, res) => {
        res.send('Dados de Usuario')
      })
}
