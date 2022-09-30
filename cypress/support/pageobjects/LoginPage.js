/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("https://padrao-qa2.webpremios.digital/auth/login")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit("https://padrao-qa2.webpremios.digital/auth/login")
    }

    // Deverá informar numero de CPF do usuário
    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }
  
    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    visualizarBotaoRecuperarSenha() {
        cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?')
    }
}

export default LoginPage;