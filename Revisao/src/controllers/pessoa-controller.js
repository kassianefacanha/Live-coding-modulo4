//PESSOA - CRUD 
const Pessoa = require('../models/pessoa-model')
const PessoaDAO = require('../DAO/pessoa-dao')

const pessoa = (app,bd)=>{
    const DAOPessoa = new PessoaDAO(bd)
    //CREATE DO CRUD - INSERIR REGISTROS
    app.post('/pessoa', (req, res) => {
        // pegar dados e armazenar no banco
        const body = req.body
        const PessoaDado = new Pessoa(body.nome, body.email, body.senha)
        const data = async() => {
            try {
                
                const pessoas =  await DAOPessoa.inserePessoas(PessoaDado)
                res.send(pessoas)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
     })
    // READ DO CRUD E EXIBI REGISTROS
    app.get('/pessoa', (req, res) => {
        const data = async() => {
            try {
                const pessoas =  await DAOPessoa.listarPessoas()
                res.send(pessoas)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
     
    })
        // READ DO CRUD E EXIBI REGISTROS
        app.get('/pessoa/:id', (req, res) => {
            const data = async() => {
                try {
                    const pessoas =  await DAOPessoa.listarPessoasID(req.params.id);
                    res.send(pessoas)
                }catch(err) {
                    res.send(err)
                }
               
            }
            data()
           })  
    //UPDATE DO CRUD - ATUALIZAR REGISTROS
    app.put('/pessoa/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id
        const data = async() => {
            try {
                const pessoasDado = await DAOPessoa.listarPessoasID(id);
                const PessoaDado = new Pessoa(body.nome || pessoasDado[0].NOME, 
                    body.email || pessoasDado[0].EMAIL, 
                    body.senha || pessoasDado[0].SENHA)
                 const parametros = [PessoaDado.nome, PessoaDado.email, PessoaDado.senha, id]
                const pessoas =  await DAOPessoa.alterePessoas(parametros)
                res.send(pessoas)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()

      
    })
    //DELETE DO CRUD - DELETAR REGISTROS
    app.delete('/pessoa/:id', (req, res) => {
        const data = async() => {
            try {
                const pessoas =  await DAOPessoa.deletePessoas(req.params.id)
                res.send(pessoas)
            }catch(err) {
                res.send(err)
            }
           
        }
        data()
        
    })
} 

module.exports = pessoa;