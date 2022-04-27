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


}

module.exports = UsuarioDAO