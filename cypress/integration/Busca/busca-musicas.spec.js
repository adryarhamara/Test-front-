/// <reference types="cypress" />

describe('Busca Musicas - Parodify', () => {
    before(() => {
         cy.login()
         cy.visit('/search/new')
    })
    describe('Verficando o carregamento dos componentes da página', () => {

        it('Logo Parodify', () => {
            cy.get('.is-4-desktop > img').should('exist')
            cy.get('.is-4-desktop').should('exist')
        })
        it('Botão Saída', () => {
            cy.get('.menu-user').should('exist')
            cy.get('.dropdown-trigger > .icon > .fas').should('exist')
        })
        it('Imagem de Fundo', () => {
            cy.get('.section').should('exist')
        })
        it('Busca', () => {
            cy.get('.is-size-5').should('exist')
        })
        it('Caixa de Pesquisa - Busca', () => {
            cy.get('#search').should('exist')
        })
        it('Imagem - Rock', () => {
            cy.get(':nth-child(1) > a > img').should('exist')
        })
        it('Imagem - Funk', () => {
            cy.get(':nth-child(2) > a > img').should('exist')
        })
        it('Imagem - Rap', () => {
            cy.get(':nth-child(3) > a > img').should('exist')
        })
        it('Imagem - Sertanejo', () => {
            cy.get(':nth-child(4) > a > img').should('exist')
        })
        it('Botão - Inicio', () => {
            cy.get('.is-fixed-bottom > :nth-child(1)').should('exist')
        })
        it('Icone "Botão - Inicio"', () => {
            cy.get(':nth-child(1) > .has-text-white > .fa').should('exist')
        })
        it('Botão - Busca', () => {
            cy.get('.is-fixed-bottom > :nth-child(2)').should('exist')
        })
        it('Icone "Botão - Busca"', () => {
            cy.get(':nth-child(2) > .has-text-white > .fa').should('exist')
        })
        it('Botão - Favorites', () => {
            cy.get('.is-fixed-bottom > :nth-child(3)').should('exist')
        })
        it('Icone "Botão - Favoritos"', () => {
            cy.get('.has-text-white > .fas').should('exist')
        })

    })
    describe('Verificando o texto dos componentes da página', () => {

        it('Busca', () => {
            cy.get('.is-size-5').should('contain','Buscar')
        })
    })
    describe('Validação do campo', () => {
    
        it('Caixa de Pesquisa - Busca', () => {
            cy.get('#search').type('Sertanejo')
        })
       
    })
                
})    
