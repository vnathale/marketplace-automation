
describe ('Realizar resgate de Voucher com Sucesso', ()=>{
    it ('Usuário deverá realizar resgate de voucher com sucesso', ()=>{
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

        //Realizar busca de Voucher    
        
        var voucher = {
            
            netshoes: '65cac646e957442c8e5b',
            fastshop: '4a73d497cbc84bf08aff'

        }

        cy.get('input[name="buscar"]').type(voucher.netshoes)
        cy.screenshot('Informar SKU do pedido')
        cy.wait (10000)
        cy.get('input[id=btn-search-loupe]').click()
        cy.screenshot('Realizar busca do produto')
        cy.wait (10000)        
                      
        
    })
})