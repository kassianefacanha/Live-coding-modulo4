const Usuario = require('../src/models/usuario-models')

test('Testando usuario', ()=>{
    expect(()=>{
        const novoUsuario = new Usuario("oi", "email@email.com", "11111111")
    }).toThrow()
}) 