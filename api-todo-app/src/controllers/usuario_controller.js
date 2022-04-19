const Usuario = require('../models/usuario-models')

const usuario = (app, bd)=>{
      app.get('/usuario', (req, res) => {
          res.json({"usuario": bd.usuario})
      })
      app.post('/usuario', (req, res) => {
        try {
            const body = req.body
            const novoUsuario = new Usuario(body.nome, body.email, body.senha)

            //Logica de inserção da entidade no bd
            bd.usuario.push(novoUsuario)
            console.log(bd.usuario)

            // Resposta para o cliente
            res.json({
                "requisicao": novoUsuario,
                "meubanco": bd.usuario,
                "erro": false
            })
        } catch (error) {
        // Resposta em caso de erro
            res.json({
                "mensager": error.message,
                "erro": true
            })
        }




    })

}

module.exports = usuario;
