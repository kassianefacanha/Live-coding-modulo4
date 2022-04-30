class Pessoa{
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = this.verificarSenha(senha);
    }
    verificarSenha(senha){
        if(senha.length <= 5 ){
            return senha
        }else{
            throw new Error("Senha deve ter até 5 caracteres")
        }
    }
}

module.exports = Pessoa;