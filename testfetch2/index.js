const express = require('express');
const app = express();

const fetch = require('node-fetch');

app.get('/', (req, res) => {

    res.send("DEU CERTO")
})
app.listen(8080,()=>{
    console.log('rodando no 8080')
})