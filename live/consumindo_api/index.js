const express = require("express");
const app = express();
const https = require('https');


app.get("/consultar/:code", async(req, response) => {
    const code = req.params.code;
  https.get(`https://restcountries.com/v2/callingcode/${code}`, (res)=>{
    res.setEncoding ("utf8");
    let datas = '';
    res.on("data", (chunk)=>{
      return datas+= chunk

    })
    res.on('end', ()=>{
      const date = JSON.parse(datas)
      response.status(200).json({"sigla": date[0].alpha2Code})
    })
  })
});

app.listen(8000, () => {
    console.log(`Example app listening on port 8000`)
  })