class UsuarioDAO{
    constructor(bd){
        this.bd = bd
    }

    listarUsuarios(){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM USUARIOS', (error, rows)=>{
                if(error){
                    reject({ "ERRO" : error.message }) 
                } else{
                    resolve({"usuarios" : rows, "count": rows.length})
                }
            })
        })  
    }

    insereUsuario(novoUsuario){
        return new Promise((resolve, reject)=>{
            this.bd.run(`INSERT INTO USUARIOS ( NOME, EMAIL, SENHA) VALUES (?,?,?)`,
            [novoUsuario.nome, novoUsuario.email, novoUsuario.senha], 
            (error)=>{
                if (error) {
                    console.log('reject');
                    reject('Usuário não pôde ser inserido')
                } else {
                    console.log('resolve');
                    resolve('Usuário inserido com sucesso')
                }
            })
        })
    }

    deletaUsuario(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM USUARIOS WHERE ID=${id}`,
            (err) => {
                if(err) {
                    reject(err)
                } else {
                    resolve('Usuário deletado com sucesso')
                }
            })
        })
    }
}



module.exports = UsuarioDAO 