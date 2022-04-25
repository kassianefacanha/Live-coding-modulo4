
const tarefa = (app, bd) =>{
// CREATE DO CRUD E INSERIR REGISTROS
app.post('/tarefa', (req, res) => {
    res.send("Aqui rota de tarefa POST VERBO HTTP")
  })  
// READ DO CRUD E EXIBI REGISTROS
app.get('/tarefa', (req, res) => {
    res.send("Aqui rota de tarefa GET VERBO HTTP")
  })
// UPDATE DO CRUD E ALTERAR REGISTROS
app.put('/tarefa', (req, res) => {
    res.send("Aqui rota de tarefa PUT VERBO HTTP")
  })
// DELETE DO CRUD E DELETAR REGISTROS
app.delete('/tarefa', (req, res) => {
    res.send("Aqui rota de tarefa DELETE VERBO HTTP")
  })
}

module.exports = tarefa;
