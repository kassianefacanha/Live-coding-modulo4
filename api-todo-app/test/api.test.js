const request = require('supertest')
const ApiUrl = "http://localhost:3000/"

describe('Teste rota',()=>{
    test('ROTA USERS',()=>{
        return request(ApiUrl).get('/usuario')
        .then((response)=>{
            expect(response.statusCode).toBe(200)
        })
    })
})