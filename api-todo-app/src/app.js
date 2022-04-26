const express = require('express') // importação express
const app = express() // instanciou express dentro de app
const port = 3000

const bdSqlite = require('./infra/sqlite-db')

const tarefa= require('./controllers/tarefa_controller')
const usuario = require('./controllers/usuario_controller')

app.use(express.json())
// app.use((req, res, next) => {
//     console.log("Rodei o middleware")
//     console.log(req.body)
//     next() 
// })

// const Usuario = require('./models/usuario-models')
// const novoUser = new Usuario("Jean", "jean@email.com", "123456")
// console.log(novoUser)

tarefa(app,bdSqlite)
usuario(app,bdSqlite)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})