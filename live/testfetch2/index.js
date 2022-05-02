const express = require('express');
const app = express();

const fetch = require('node-fetch');


app.get('/', (req, res) => {
    // https://gorest.co.in/public/v2/users
    fetch("https://www2.camara.leg.br/transparencia/dados-abertos/dados-abertos-legislativo",{
            method: 'GET',
            headers: {
            'Content-Type': 'text/xml',
            'User-Agent': '*'
            }
            }).then(res => res.text()).then(function(xml) {
            let json_result = xml_to_js.xml2json(xml, {compact: true, spaces: 4});
            return json_result
        })
    
    res.send("deu certo")
})
app.listen(8000,()=>{
    console.log('rodando no 8080')
})