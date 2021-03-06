class UsuarioDAO {
    constructor(bd){
        this.bd = bd
    }

    listarUsuarios(){
        return new Promise((resolve, reject)=>{
            this.bd.all(`SELECT * FROM USUARIOS`, (error, rows) => {
                if(error){
                 reject("ERRO AO SELECIONAR BANCO")
                }else {
                  resolve({"banco selecionado": rows})
                }
              })
        })
    }

    insereUsuario(DadosNovoUsuario){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)`, 
            [DadosNovoUsuario.nome, DadosNovoUsuario.email, DadosNovoUsuario.senha],
            (error)=>{
                if(error){
                    reject(error)
                }else{
                   resolve("DEU CERTO INSERIR")
                }
            })
        })
       

    }


}

module.exports = UsuarioDAO