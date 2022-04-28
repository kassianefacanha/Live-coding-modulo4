const express = require('express');
const app = express();

app.use(express.json())

const corretoresController = require('./controllers/corretores-controller')

corretoresController(app)

app.listen(3000,()=>{
    console.log("rodando na localhost:3000")
})