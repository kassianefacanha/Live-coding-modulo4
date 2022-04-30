class PessoaDAO{
    constructor(bd){
        this.bd = bd;
    }
    listarPessoas(){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM PESSOAS`, (err, results) => {
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })
        })
    }
    listarPessoasID(id){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM PESSOAS WHERE ID=${id}`, (err, results) => {
                if(err){
                   reject(err)
                }else{
                   resolve(results)
                }
            })
        })

    }
    inserePessoas(NovaPessoa){
        return new Promise((resolve, reject) =>{
            this. bd.run(`INSERT INTO PESSOAS (NOME , EMAIL , SENHA ) VALUES (?,?,?)`,
            [NovaPessoa.nome, NovaPessoa.email, NovaPessoa.senha],(error)=>{
                if(error){
                   reject(error);
                }else{
                   resolve("INSERIDO COM SUCESSO!")
                }
            })
      
        })

    }
    alterePessoas(Parametros){
        return new Promise((resolve, reject) =>{
            this.bd.run(`UPDATE PESSOAS SET NOME = ?, EMAIL = ? , SENHA = ? WHERE id = ?`, Parametros ,(error)=>{
            if(error){
                console.log(error)
               reject(error);
            }else{
               resolve("ALTERADO COM SUCESSO!")
            }
        })
    })

    }
    deletePessoas(id){
        return new Promise((resolve, reject) =>{
            this.bd.run(`DELETE FROM PESSOAS WHERE ID = ${id}`,(error)=>{
                if(error){
                   reject(error);
                }else{
                   resolve("DELETADO COM SUCESSO!")
                }
            })
    })


    }

}

module.exports = PessoaDAO;