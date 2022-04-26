const Tarefa = require('../models/tarefa-models')

const tarefa = (app, bd) => {
      app.get('/tarefa', (req, res) => {
         bd.all(`SELECT * FROM USUARIOS`, (error, rows) => {
      if(error){
        res.json("ERRO AO SELECIONAR BANCO")
      }else {
        res.json({"banco selecionado": rows})
      }
    })
      })
     app.post('/tarefa', (req, res) => {
        try {
            const body = req.body
                //Importante validar os campos com o model
            const novaTarefa = new Tarefa(body.usuario, body.titulo, body.status)

            //Logica de inserção da entidade no bd
            bd.tarefa.push(novaTarefa)
            console.log(bd.tarefa)

            // Resposta para o cliente
            res.json({
                "requisicao": novaTarefa,
                "erro": false
            })
        } catch (error) {
            // Resposta em caso de erro
            res.json({
                "mensagem": error.message,
                "erro": true
            })
        }

    })

}
module.exports = tarefa;