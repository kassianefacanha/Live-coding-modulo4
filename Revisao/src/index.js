const express = require('express')
const app = express();
//importando o controller
const pessoa = require('./controllers/pessoa-controller')
//importando banco
const bd = require('./infra/sqlite-db')

// body-parser
app.use(express.json())

//chamando o controller e passando o express
pessoa(app, bd)



app.listen(3000, ()=>{
    console.log("rodando na porta 3000")
})