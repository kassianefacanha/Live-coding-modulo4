const express = require('express') // importação express
const app = express() // instanciou express dentro de app
const port = 3000

const tarefaController = require('./src/controllers/tarefa_controller')
const usuarioController = require('./src/controllers/usuario_controller')

tarefaController(app)
usuarioController(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})