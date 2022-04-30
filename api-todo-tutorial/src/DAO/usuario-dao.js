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
    listarUsuariosID(id){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM USUARIOS  WHERE id = ?',[id], (error, rows)=>{
                if(error){
                    reject({ "ERRO" : error.message }) 
                } else{
                    resolve({"usuarios" : rows})
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
    alterarUsuario(UsuarioAtualizado){
        return new Promise((resolve, reject) => {
            this.bd.run('UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE id = ?', UsuarioAtualizado, (erro, linhas)=>{
                if(erro) reject('Não foi possível atualizar o usuário');
                else resolve('Usuário atualizado');           
            });
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