var id = 0

class Usuario {
    constructor(nome, email, senha) {
        this.id = id++
        this.nome = nome
        this.email = email
        this.senha = this.verificarSenha(senha)
    }

    verificarSenha(senha) {
        if (senha.length <= 6) {
            return senha
        } else {
            throw new Error("Senha deve ter até 6 caracteres")
        }
    }

}

module.exports = Usuario 