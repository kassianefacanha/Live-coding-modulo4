const Usuario = require('../models/usuario-models')

const usuario = (app, bd)=>{
      app.get('/usuario', (req, res) => {
          res.json({"usuario": bd.usuario})
      })
      app.post('/usuario', (req, res) => {
        try {
            const body = req.body
            const novoUsuario = new Usuario(body.nome, body.email, body.senha)
            bd.usuario.push(novoUsuario)
            console.log(bd.usuario)

            res.json({
                "requisicao": novoUsuario,
                "meubanco": bd.usuario,
            })
        } catch (error) {

            res.json({
                "menssage": error.message,
            })
        }
        app.get('/usuario/:nome', (req, res) => {
            const nome = req.params.nome
            res.json({
                "mensagem": " por parametro",
                "parametro": nome,

            })
        })
    
        app.get('/usuario/:email', (req, res) => {
            const email = req.params.email
            for (let i = 0; i <= bd.length; i++) {
                if (bd[i].email == email) {
                    return `o email encontrado e ${email}`
                }
            }
        })
        app.put('/usuario/:email', (req, res) => {
        const email = req.params.email
        const body = req.body
        const indexUsuario = bd.usuario.findIndex((usuario => usuario.email === email))

        try {
            if (indexUsuario > -1) {
                const usuarioAntigo = bd.usuario[indexUsuario]
                const usuarioAtualizado = new Usuario(
                    body.nome || usuarioAntigo.nome,
                    body.email || usuarioAntigo.email,
                    body.senha || usuarioAntigo.senha,
                    usuarioAntigo.id,
                )

                res.json({"atualizado": usuarioAtualizado,
    
                })
            } else {
                res.json({"mensagem": `Usuário com email "${email}" não existe`,})
            }
        } catch (error) {
            res.json({ "mensagem": error.message,})
        }
    })
        app.delete('/usuario/:email', (req, res)=> {
                const email = req.params.email
                const indexUsuario = bd.usuario.findIndex((usuario=>usuario.email===email))
        
                if(indexUsuario > -1){
                    const usuarioDeletado = bd.usuario.splice(indexUsuario, 1)
                    res.json({ "deletado": usuarioDeletado, })
                } else {
                    res.json({
                     "mensagem": `Usuário com email "${email}" não existe`,
                    })
                }
        })
        

    })

}
module.exports = usuario
