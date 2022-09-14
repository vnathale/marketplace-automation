



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
        cy.get('input[name="username"]').type(login.cpf)
        cy.get('button[id="btnContinue"]').click() //Clicar no Botão Continuar
        cy.screenshot()


        //Agora digite a sua senha.
        cy.get('input[id="password"]').type(login.password)
        cy.get('button[id="btnEntrar"]').click() 
        cy.wait(1000)
        cy.screenshot()
        //Clicar no botão perfil do Cliente
        cy.get('button[id="profile-menu"]').click()
        cy.screenshot()
        //Verificar Pedidos do cliente 
        cy.visit('https://padrao-qa2.webpremios.digital/my-orders?days=30')//Verificar Todos os pedidos do cliente
        cy.screenshot()
        cy.wait(5000)
    
    })
})
