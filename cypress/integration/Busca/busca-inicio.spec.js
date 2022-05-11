/// <reference types="cypress" />

describe('Busca Inicio - Parodify', () => {
    beforeEach(() => {
         cy.login()
         cy.visit('/')
    })
    describe('Verficando o carregamento dos componentes da página', () => {

        it('Logo - Parodify', () => {
            cy.get('img').should('exist')
        })
        it('Imagem de Fundo', () => {
            cy.get('.section').should('exist')
        })
        it('Botão de Saída', () => {
            cy.get('.menu-user').should('exist')
            cy.get('.icon > .fas').should('exist')
        })
        it('Musicas Recentes', () => {
            cy.get('.section > :nth-child(1)').should('exist')
        })
        it('Musicas Recomendadas', () => {
            cy.get(':nth-child(3) > .is-size-5').should('exist')
        })
        it('Botão de Inicio', () => {
            cy.get('.is-fixed-bottom > :nth-child(1)').should('exist')
            cy.get(':nth-child(1) > .has-text-white > .fa').should('exist')
        })
        it('Botão de Busca', () => {
            cy.get('.is-fixed-bottom > :nth-child(2)').should('exist')
            cy.get(':nth-child(2) > .has-text-white > .fa').should('exist')
        })
        it('Botão de Favoritos', () => {
            cy.get('.is-fixed-bottom > :nth-child(3)').should('exist')
            cy.get('.has-text-white > .fas').should('exist')
        })
    })
    describe('Verificando o texto dos componentes da página', () => {

        it('Musicas Recentes', () => {
            cy.get(':nth-child(1) > .is-size-5').should('contain','Tocadas Recentemente')
        })
        it('Musicas Recomendadas', () => {
            cy.get(':nth-child(3) > .is-size-5').should('contain','Recomendadas')
        })
        it('Botão de busca de Musica', () => {
            cy.get('.is-fixed-bottom > :nth-child(2)').click()
        })
    })
        
    
})