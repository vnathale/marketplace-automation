



describe ('Verificar Pedidos', ()=>{
    it ('Usuário deverá verificar pedidos confirmados', ()=>{
        cy.viewport(1400, 900)

        cy.visit('https://padrao-qa2.webpremios.digital/') 
        
        cy.on('uncaught:exception', (err, runnable) => {return false})     
        cy.wait (10000)
       
        var login = {
            
            cpf: '22590351089',
            cnpj: '75053543000176',
            password:'Ltm@123456'     
        }
       
        //Digite o seu Login ou CPF/CNPJ.
        cy.get('input[id="username"]').type(login.cpf)
        cy.get('button[id="btnContinue"]').click()

        //Agora digite a sua senha.
        cy.get('input[name="password"]').type(login.password)
        cy.get('button[id="btnEntrar"]').click() 
        cy.wait(1000)
        cy.contains('tracking-count color-success txt-center txt-font-body pos-absolute').click()
        cy.wait(9000)
    
    })
})
