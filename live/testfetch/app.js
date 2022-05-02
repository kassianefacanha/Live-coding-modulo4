const express = require("express");
const app = express();
const http = require('http');

app.get("/", async(req, response) => {
    const code = req.params.code;
  http.get('http://localhost:3000/usuario', (res)=>{
    res.setEncoding ("utf8");
    let datas = '';
    res.on("data", (chunk)=>{
      return datas+= chunk

    })
    res.on('end', ()=>{
      const date = JSON.parse(datas)
      response.status(200).json({"sigla": date})
    })
  }) 
})
app.listen(8000, () => {
    console.log("Example app listening on port 8000")
  })