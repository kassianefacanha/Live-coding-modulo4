const Usuario = require('../models/usuario-model')
const UsuarioDao = require('../DAO/usuario-dao')

const usuario = (app, bd)=>{
  let users = bd.usuarios
const novoUsuarioDAO = new UsuarioDao(bd)
// CREATE DO CRUD E INSERIR REGISTROS
app.post('/usuario', (req, res) => {
        // Usar o try-catch para pegar o erro, caso a validacao
        const body = req.body;
        const NovoUsuario = new Usuario(body.nome, body.email, body.senha)
        const data = async() => {
            try{
               novoUsuarioDAO.insereUsuario(NovoUsuario);
                res.send(`Usuário inserido com sucesso`);
            } catch(err) {
                res.send(err);
            }
        }
        data();


  }) 
// READ DO CRUD E EXIBI REGISTROS
app.get('/usuario', (req, res) => {
    const data = async() => {
      try{
          const usuarios = await novoUsuarioDAO.listarUsuarios();
          res.send(usuarios)
      } catch(err) {
          res.send(err);
      }
  }
  data(); 
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
  const data = async() => {
    try{
        novoUsuarioDAO.deletaUsuario(req.params.id);
        res.send(`Usuário deletado com sucesso`);
    } catch(err) {
        res.send(err);
    }
}
data();

  })
}

module.exports = usuario;

  