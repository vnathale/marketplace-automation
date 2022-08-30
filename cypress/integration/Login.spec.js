


describe ('Realizar Login', ()=>{
    it ('Usuário deverá realizar acesso ao sistema com sucesso', ()=>{
        cy.viewport(1400, 900)
        
        cy.visit('https://padrao-qa2.webpremios.digital/') 
        cy.screenshot()

        cy.on('uncaught:exception', (err, runnable) => {return false})     


        cy.wait (10000)
        
        var login = {
            
            cpf: '22590351089',
            cnpj: '75053543000176',
            password:'Ltm@123456'     
        }
        
        //Digite o seu Login ou CPF/CNPJ.
        cy.get('input[id="username"]').type(login.cpf)
        cy.screenshot()
        cy.get('button[id="btnContinue"]').click()
        cy.screenshot()
        //Agora digite a sua senha.
        cy.get('input[id="password"]').type(login.password)
        cy.screenshot()
        cy.get('button[id="btnEntrar"]').click()
        cy.screenshot()        
        cy.wait (10000)
    })
})