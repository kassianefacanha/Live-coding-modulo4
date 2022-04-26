const Usuario = require('../src/models/usuario-model')

test('Inserindo usuario', ()=>{
    expect(()=>{
        const novoUsuario = new Usuario("oi", "email@email.com", "11111111")
    }).toThrow()
}) 