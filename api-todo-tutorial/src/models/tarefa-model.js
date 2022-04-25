let id = 0

class Tarefa {
    constructor(usuario, titulo, status) {
        this.id = id++
        this.usuario = usuario
        this.titulo = titulo
        this.status = this.validaStatus(status)
    }

    validaStatus(status) {
        const statusValidos = ["FAZER", "FEITO", "FAZENDO"]
        if (statusValidos.indexOf(status) > -1) {
            return status
        } else {
            throw new Error("O status dever ser igual a: FAZER, FEITO, FAZENDO")
        }
    }
}

module.exports = Tarefa 