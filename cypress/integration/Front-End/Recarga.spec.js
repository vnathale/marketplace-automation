






describe ('Recarga de Celular', ()=>{
    it ('Usuário deverá realizar a recarga de celular com sucesso', ()=>{
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
        cy.get('button[id="btnContinue"]').click() //Clicar no Botão Continuar
        cy.screenshot()
        //Agora digite a sua senha.
        cy.get('input[id="password"]').type(login.password)
        cy.get('button[id="btnEntrar"]').click() 
        cy.wait(1000)
        cy.screenshot()
        //Realizar recarga de celular com sucesso
        cy.visit('https://padrao-qa2.webpremios.digital/mobile-recharge')
        cy.screenshot()
        //Selecionar operadora Claro
        cy.contains('for="op-Claro"').click()
        cy.screenshot()
        cy.wait(1000)

        //Informar numero para recarga
            var celular = {
            numero1: '971291364',
            numero2: '996607844'
            }

        // Informar Numero de Telefone para Recarga
        cy.get('input[id=dataDDD]').click()
        cy.screenshot()
        cy.wait(1000)
        cy.get('input[id="telefone"]').type(celular.numero1)


        cy.screenshot()           
                                     
    })
})
