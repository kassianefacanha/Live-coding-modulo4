const express = require('express');
const app = express();

const fetch = require('node-fetch');

app.get('/', (req, res) => {
    // https://gorest.co.in/public/v2/users
    fetch("http://localhost:3000/usuario")
                    .then((response) => {
                        return response.json()
                    }).then((data) => {console.log(data)})
    res.send("deu certo")
})
app.listen(8000,()=>{
    console.log('rodando no 8080')
})