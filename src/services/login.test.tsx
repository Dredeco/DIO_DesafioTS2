import { login } from "./login"

describe('login', () => {

    const mockEmail = 'andre@dio.bank'
    const mockPassword = '123456'

    it('Deve exibir um alert com boas vindas caso o email/senha seja válido', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email/senha seja inválido', async() => {
        const response = await login('email@invalido.com', '123')
        expect(response).toBeFalsy()
    })

})