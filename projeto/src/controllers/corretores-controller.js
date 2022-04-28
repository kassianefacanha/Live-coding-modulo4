const bd = require('../infra/sqlite-db');
const Corretor = require('../models/corretores-model')
const DaoCorretor = require('../DAO/corretores-dao')

const corretores = (app)=>{

const CorretorDao = new DaoCorretor(bd)
    //read no crud
    app.get('/corretores',(req,res)=>{
      const data = async() => {
          try {
            const Corretores = await CorretorDao.listarCorretores()
            res.send(Corretores)
          }catch{
              res.send("erro")
          }
      }
    data()
    })
    //create no crud
    app.post('/corretores',(req,res)=>{
        const body = req.body
        const DadosNovoCorretor = new Corretor(body.nome,body.email, body.senha)
        const data = async() => {
            try {
              const Corretores = await CorretorDao.insereCorretores(DadosNovoCorretor)
              res.send(Corretores)
            }catch{
                res.send("erro")
            }
        }
        data()
    })
    //update no crud
    app.put('/corretores/:id',(req,res)=>{
        // pegar o id
        // consultar o sql buscar
        // pegar o que eu tenho q alterar
        // alterar

    })
    // delete crud
    app.delete('/corretores/:id',(req,res)=>{
        const id = req.params.id
        const data = async() => {
            try {
              const Corretores = await CorretorDao.deletaCorretores(id)
              res.send(Corretores)
            }catch{
                res.send("erro")
            }
        }
        data()
    })
}

module.exports = corretores;