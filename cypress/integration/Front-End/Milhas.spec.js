


describe ('Realizar Resgate de Milhas com sucesso', ()=>{
    it ('Usuário deverá realizar resgate do Milhas com sucesso', ()=>{
        cy.viewport(1536, 960)
        
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
        cy.get('input[name="username"]').type(login.cpf)
        cy.screenshot()
        cy.get('button[id="btnContinue"]').click()
        cy.screenshot()
        //Agora digite a sua senha.
        cy.get('input[id="password"]').type(login.password)
        cy.screenshot()
        cy.get('button[id="btnEntrar"]').click()
        cy.screenshot()        
        cy.wait (10000)

        //Acessar URL de Milhas com sucesso após realziar o Login
        cy.visit('https://padrao-qa2.webpremios.digital/mileage')
        cy.contains('Transferir para').click()
        cy.get('[value="80"]').click()
        cy.get('input[id="pontos_converter"]').type('10')//Informar quantidades de pontos
        cy.wait (4000)
        cy.contains('class="bg-white"').click() //Li e aceito os termos do regulamento
        cy.wait (4000)














    })
})