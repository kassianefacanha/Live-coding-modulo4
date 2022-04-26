class UsuarioDAO{
    constructor(bd){
        this.bd = bd
    }

    listarUsuarios(){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM USUARIOS', (error, rows)=>{
                if(error){
                    reject({
                        "mensagem" : error.message,
                        "error" : true
                    }) 
                } else{
                    resolve({
                        "usuarios" : rows,
                        "count": rows.length,
                        "error" : false
                    })
                }
            })
        })  
    }

    insereUsuario(novoUsuario){
        return new Promise((resolve, reject)=>{
            this.bd.run(`INSERT INTO USUARIOS ( NOME, EMAIL, SENHA) VALUES (?,?,?)`,
            [novoUsuario.nome, novoUsuario.email, novoUsuario.senha], 
            (error)=>{
                if(error){
                    reject({
                        "mensagem" : error.message,
                        "erro" : true 
                    })
                } else {
                    resolve({
                        "requisicao" : novoUsuario,
                        "erro" : false 
                    })
                }
            })
        })
    }

}

module.exports = UsuarioDAO 