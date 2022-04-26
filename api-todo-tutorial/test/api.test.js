const request = require('supertest')
const app = require('../src/index')


describe('Teste rota Usuario GET',()=>{
    test('Testando status 200', ()=>{
        return request(app).get('/usuario')
        .then((response)=>{
            expect(response.statusCode).toBe(200)
        })
    })
})