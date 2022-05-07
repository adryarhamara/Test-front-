/// <reference types="cypress" />

describe('Login - Parodify', () => {
    before(() => {
        cy.visit('/users/sign_in')
    })

    describe('Verficando o carregamento do componente da página', () => {

        it('Logo - Parodify', () =>{
            cy.get('img').should('exist')
        })
        it('Imagem de Fundo', () => {
            cy.get('.container').should('exist')
        })
        it('Botão Menu Login', () => {
            cy.get('img').should('exist')
            cy.get('.menu-button > .button').should('exist')
        })
        it('Card Box', () => {
            cy.get('.card-content').should('exist')
        })
        it('Card Logo', () => {
            cy.get('.has-text-centered > img').should('exist')
            cy.get('.has-text-centered').should('exist')
        })
        it('Input E-mail', () => {
            cy.get('#new_user > :nth-child(3)').should('exist')
        })
        it('Input Senha', () => {
            cy.get('#user_password').should('exist')
        })
        it('Botão - Lembrar Dados', () => {
            cy.get('#new_user > :nth-child(5)').should('exist')
        })
        it('Botão - Log in', () => {
            cy.get('.actions > .button').should('exist')
        })
        it('Botão - Cadastro', () => {
            cy.get('small > a').should('exist')
        })
    })

    describe('Verificando o texto dos componentes da página', () => {
        it('Botão Menu Login', () => {
            cy.get('.menu-button > .button').should('contain','Login')
        })
        it('Email', () => {
            cy.get(':nth-child(3) > label').should('contain', 'Email') 
         })   
        it('Senha', () => {
            cy.get(':nth-child(4) > label').should('contain','Senha secreta') 
        })  
        it('Lembrar Dados', () => {
            cy.get(':nth-child(5) > label').should('contain','Lembrar meus dados')
        }) 
        it('Botão - Log in', () => {
            cy.get('.actions > .button').should('contain','Log in')
        })
        it('Não possui cadastro', () => {
            cy.get('small').should('contain','Ainda não possui uma conta? ')
        })
        it('Botão Cadastro', () => {
            cy.get('small > a').should('contain','Cadastre-se')
        })
    })

    describe('Validação do campo email', () => {

        it('Validação Email', () => {
            cy.get('#user_email').type('papito@qa.ninja')
            cy.get('#user_password').type('pwd123')
            cy.get('.actions > .button').click()
        })

       it('Erro, Validação de campo de email', () => {
            cy.get('.message-body').should('exist')
            cy.get('.message-body').should('contain','')
        })
    
    })  

    describe('Validação do campo senha', () => {
       
        it('Validação Senha', () => {
            cy.get('#user_email').type('papito@qa.ninja')
            cy.get('#user_password').type('123')
            cy.get('.actions > .button').click()
        })

       /* it('Erro, Validação de campo de senha', () => {
            cy.get('.message-body').should('exist')
            cy.get('.message-body').should('contain','')
        })
      */

    })
    
    

})