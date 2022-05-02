let id = 0;

class Aluno{
    constructor(nome, email, senha){
        this.id = id++;
        this.nome = nome;
        this.email = email;
        this.senha = this.validarsenha(senha);
    }
    validarsenha(senha){
        if(senha.length <= 5){
            return senha;
        }else{
            throw new Error("Senha deve ter 5 caracteres")
        }
    }
}

module.exports = Aluno;