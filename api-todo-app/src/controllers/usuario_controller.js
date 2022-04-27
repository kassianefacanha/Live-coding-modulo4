
const bd = require('../infra/sqlite-db')
const Usuario = require('../models/usuario-models')
const UsuarioDAO = require('../DAO/usuario-dao')

const usuario = (app,bdSqlite)=>{

const InstUsuarioDao = new UsuarioDAO(bdSqlite)


      app.get('/usuario', (req, res) => {
        InstUsuarioDao.listarUsuarios()
        .then((resposta)=>{
            res.json(resposta)
        }).catch((error)=>{
            res.json(error)
        })
      })
      app.post('/usuario', (req, res) => {
        //pegar body e inserir as informações
    
            const body = req.body
            const NovoUsuario = new Usuario(body.nome,body.email, body.senha)
            bdSqlite.run(`INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)`, 
            [NovoUsuario.nome, NovoUsuario.email, NovoUsuario.senha],
            (error)=>{
                if(error){
                    res.json(error)
                }else{
                    res.json("DEU CERTO INSERIR")
                }
            })


        })
        app.get('/usuario/:nome', (req, res) => {
            const nome = req.params.nome
            res.json({
                "mensagem": " por parametro",
                "parametro": nome,

            })
        })
    
        app.get('/usuario/:email', (req, res) => {
            const email = req.params.email
            for (let i = 0; i <= bdSqliteSqlite.length; i++) {
                if (bdSqliteSqlite[i].email == email) {
                    return `o email encontrado e ${email}`
                }
            }
        })
        app.put('/usuario/:email', (req, res) => {
        const email = req.params.email
        const body = req.body
        const indexUsuario = bdSqliteSqlite.usuario.findIndex((usuario => usuario.email === email))

        try {
            if (indexUsuario > -1) {
                const usuarioAntigo = bdSqliteSqlite.usuario[indexUsuario]
                const usuarioAtualizado = new Usuario(
                    body.nome || usuarioAntigo.nome,
                    body.email || usuarioAntigo.email,
                    body.senha || usuarioAntigo.senha,
                    usuarioAntigo.id,
                )
                const DadoUsuarioAtualizado = bdSqliteSqlite.usuario.splice(indexUsuario, 1, usuarioAtualizado)
                res.json({"atualizado": DadoUsuarioAtualizado,})
            } else {
                res.json({"mensagem": `Usuário com email "${email}" não existe`,})
            }
        } catch (error) {
            res.json({ "mensagem": error.message,})
        }
    })
        app.delete('/usuario/:email', (req, res)=> {
                const email = req.params.email
                const indexUsuario = bdSqliteSqlite.usuario.findIndex((usuario=>usuario.email===email))
        
                if(indexUsuario > -1){
                    const usuarioDeletado = bdSqliteSqlite.usuario.splice(indexUsuario, 1)
                    res.json({ "deletado": usuarioDeletado, })
                } else {
                    res.json({
                     "mensagem": `Usuário com email "${email}" não existe`,
                    })
                }
        })
        
    }

module.exports = usuario
