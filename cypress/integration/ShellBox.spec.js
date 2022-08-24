



describe ('Créditos em Combustível', ()=>{
    it ('Usuário deverá realizar o resgate do ShellBox com sucesso', ()=>{
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
        cy.get('button[id="btnContinue"]').click()

        //Agora digite a sua senha.
        cy.get('input[id="password"]').type(login.password)
        cy.get('button[id="btnEntrar"]').click() 
        cy.wait(1000)   
        //Abasteça o seu veículo com pontos. Escolha o valor em créditos que deseja utilizar.

        cy.visit('https://padrao-qa2.webpremios.digital/fuelcredit')
        cy.wait (1000)
        cy.contains('Quantos créditos você deseja').click()
        
        cy.get('.effect > span:nth-child(2)').click();
        //Li e aceito os termos
        cy.contains('termos').click()
        cy.wait (10000)
        cy.get('button[id="Agree-desktop-termos-do-regulamento-de-shell-box"]').click()
        cy.wait (10000)
   
        //Finalizar Resgate
        cy.contains('Finalizar compra').click({force:true})
        cy.wait (30000)

    })
})





