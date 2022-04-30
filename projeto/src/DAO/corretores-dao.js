class CorretoresDAO{
    constructor(bd){
        this.bd = bd
    }

    listarCorretores(){
      return new Promise((resolve,reject)=>{
          this.bd.all(`SELECT * FROM CORRETORES`, (error, result)=>{
            if(error){
               reject(error);
            }else{
                resolve(result);
            }
        })
      })
    }

    insereCorretores(novoCorretores){
        return new Promise((resolve,reject)=>{
            this.bd.run(`INSERT INTO CORRETORES (NOME, EMAIL, SENHA) VALUES (?,?,?)`, 
            [novoCorretores.nome, novoCorretores.email, novoCorretores.senha],
            (error)=>{
                if(error){
                   reject(error)
                }else{
                   resolve("DEU CERTO INSERIR")
                }
            })
        })
    }

    deletaCorretores(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM CORRETORES WHERE ID=${id}`,
            (err) => {
                if(err) {
                    reject(err)
                } else {
                    resolve('Corretor deletado com sucesso')
                }
            })
        })
    }


}



module.exports = CorretoresDAO 