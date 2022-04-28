const request = require('supertest')
const ApiUrl = "http://localhost:3000"

describe('ApiUrl', () => {
    test('TESTANDO ROTA USERS', () => {
        return request(ApiUrl).get('/usuario')
        .then((response) =>{
            expect(response.statusCode).toBe(200)
        })
    })
    test('TESTANDO ROTA USERS', () => {
        return request(ApiUrl).get('/users')
        .then((response) =>{
            expect(response.statusCode).toBe(200)
        })
    })
    test('TESTANDO ROTA USERS', () => {
        return request(ApiUrl).get('/users')
        .then((response) =>{
            expect(response.statusCode).toBe(200)
        })
    })
})
