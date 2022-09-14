




describe ('Homepage', ()=>{
    it ('Usuário deverá realizar acesso a homepage do sistema', ()=>{
        cy.viewport(1400, 900)        
        cy.visit('https://padrao-qa2.webpremios.digital/')    
        cy.screenshot()                   
    })

})



