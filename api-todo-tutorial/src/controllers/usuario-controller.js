const Usuario = require('../models/usuario-model')

const usuario = (app, bd)=>{
// CREATE DO CRUD E INSERIR REGISTROS
app.post('/usuario', (req, res) => {
    // pegar informações e armazenar em algum lugar 
    // corpo da requisão
  try {

    const body = req.body
    const NovoUsuario = new Usuario(body.nome,body.email, body.senha)
    bd.usuario.push(NovoUsuario)
    res.json({"NovoUsuario": NovoUsuario})

  }catch (error) {
    res.json({"message": error.message})
  }
   

  }) 
// READ DO CRUD E EXIBI REGISTROS
app.get('/usuario', (req, res) => {
    bd.all(`SELECT * FROM USUARIOS`, (error, rows) => {
      if(error){
        res.json("ERRO AO SELECIONAR BANCO")
      }else {
        res.json({"banco selecionado": rows})
      }
    })
  })

// READ DO CRUD E EXIBI REGISTROS
//rota extra parametros
app.get('/usuario/:nome', (req, res) => {
  res.json(req.params.nome)
})
// UPDATE DO CRUD E ALTERAR REGISTROS
app.put('/usuario/:nome', (req, res) => {
  // pegar parametro, pegar o corpo da requisisao, buscar pelo paramentro e alterar registro
  const nome = req.params.nome;
  const body = req.body
  const IndexeUsuario = bd.usuario.findIndex(usuario => usuario.nome === nome)
  
  if(IndexeUsuario > -1){
    const DadoAntigoUsuario = bd.usuario[IndexeUsuario]
    const DadoNovoUsuario = new Usuario(
      body.nome || DadoAntigoUsuario.nome,
      body.email || DadoAntigoUsuario.email,
      body.senha || DadoAntigoUsuario.senha,
      DadoAntigoUsuario.id
    )
    const UsuarioAtualizado = bd.usuario.splice(IndexeUsuario, 1, DadoNovoUsuario)
    res.json({"UsuarioDeletado": UsuarioAtualizado})
  }else {
    res.json("NOME NÃO ENCONTRADO NO BANCO")
  }
  })
// DELETE DO CRUD E DELETAR REGISTROS
app.delete('/usuario/:nome', (req, res) => {
  // parametro para buscar o dados q a gente deletar
  // pegar o parametro, buscar, alterar/deletar
  const nome = req.params.nome;
  const IndexeUsuario = bd.usuario.findIndex(usuario => usuario.nome === nome)
  
  if(IndexeUsuario > -1){
    const UsuarioDeletado = bd.usuario.splice(IndexeUsuario, 1)
    res.json({"UsuarioDeletado": UsuarioDeletado})
  }else {
    res.json("NOME NÃO ENCONTRADO NO BANCO")
  }

  })
}

module.exports = usuario;

  