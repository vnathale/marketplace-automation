

/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site Campanha Padrão", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

Then("devo visualizar botao de recuperar senha esquecida", () => {
    loginPage.visualizarBotaoRecuperarSenha();
})