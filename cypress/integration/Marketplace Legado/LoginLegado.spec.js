




describe ('Realizar Login na campanha legado com sucesso', ()=>{
    it ('Usuário deverá realizar acesso ao sistema legado com sucesso', ()=>{
        cy.viewport(1400, 900)
        
        cy.visit('https://iqoption.com/pt') 
        cy.wait (5000)
        cy.screenshot()

        cy.on('uncaught:exception', (err, runnable) => {return false})     
       
        cy.get('input[id="txtLogin"]').type('vinicius.bueno')//Informar login de usuário
        cy.wait (5000)
        cy.screenshot('informar login de usuário')

        cy.get('input[name="txtSenha"]').type('123456')//Informar Senha de usuário 
        cy.wait (5000)
        cy.screenshot('informar senha de usuário')

        cy.get('button[id="loginButton"]').click()//Após informar login e senha, deverá realizar o acesso ao Site com sucesso
        cy.wait (5000)
        cy.screenshot('realizar o acesso ao site com sucesso')

        cy.screenshot()
        cy.wait (10000)
    })
})
