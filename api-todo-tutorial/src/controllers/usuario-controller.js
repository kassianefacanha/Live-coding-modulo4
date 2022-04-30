const Usuario = require('../models/usuario-model')
const UsuarioDao = require('../DAO/usuario-dao')

const usuario = (app, bd)=>{
const novoUsuarioDAO = new UsuarioDao(bd)
// CREATE DO CRUD E INSERIR REGISTROS
app.post('/usuario',(req, res) => {
        // Usar o try-catch para pegar o erro, caso a validacao
        const body = req.body;
        const NovoUsuario = new Usuario(body.nome, body.email, body.senha)
        const data = async() => {
          try{
            const novoUsuario = await novoUsuarioDAO.insereUsuario(NovoUsuario)
            res.send(novoUsuario);
          }catch(err) {
            res.send(err);
          }
        }  
        data()        
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
app.get('/usuario/:id', (req, res) => {
  const id = req.params.id;
  const data = async() => {
    try{
        const usuarios = await novoUsuarioDAO.listarUsuariosID(id);
        res.send(usuarios)
    } catch(err) {
        res.send(err);
    }
}
data(); 
})
// UPDATE DO CRUD E ALTERAR REGISTROS
app.put('/usuario/:id', (req, res) => {
  // pegar parametro, pegar o corpo da requisisao, buscar pelo paramentro e alterar registro
  const body = req.body
  const id = req.params.id;
  const data = async() => {
    try{
        const usuarios = await novoUsuarioDAO.listarUsuariosID(id);
        console.log(usuarios)
          const parametro = 
          [usuarios.nome, 
            usuarios.email, 
            usuarios.senha, id];
          console.log(parametro)
          // const UsuarioAtual = await novoUsuarioDAO.alterarUsuario(parametro);
          // console.log(UsuarioAtual)
        res.send(UsuarioAtual)
    } catch(err) {
        res.send(err);
    }
}
data(); 
  // const body = req.body
  //   const data = async() => {
  //     try{
  //       const usuarios = await novoUsuarioDAO.alterarUsuario(body, id);
  //         res.json({"UsuarioDeletado": usuarios})
  //     } catch(err) {
  //         res.send(err);
  //     }
  // }
  // data(); 
  })
// DELETE DO CRUD E DELETAR REGISTROS
app.delete('/usuario/:id', (req, res) => {
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

  