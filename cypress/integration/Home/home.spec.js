/// <reference types="cypress" />

describe('Home - Paradify',() => {
      beforeEach(() => {
             cy.visit('/')
      })

    describe('Verficar o carregamento do componente da página', () => {

        it('Logo - Paradify', () => {
            cy.get('img').should('exist')
            cy.get('.is-4-desktop').should('exist')
        })
        it('Imagem de fundo', () => {
            cy.get('.hero-body').should('exist')
        })
        it('Titulo Principal', () => {
            cy.get('.container').should('exist')
        })
        it('Titulo da home' ,() => {
            cy.get('.title').should('exist')
        })
        it('Subtitulo da home', () => {
            cy.get('.subtitle').should('exist')
        })
        it('Botão para login', () => {
            cy.get('.menu-button > .button').should('exist')
        })
        it('Botão para cadastro', () => {
            cy.get('.container > .button').should('exist')
        })
    })

    describe('Verficando o texto dos componentes da página', () => {
         it('Titulo da home', () => {
            cy.get('.title').should('contain','Se estiver no trem ou onibus')

         })
         it('Subtitulo da home', () => {
            cy.get('.subtitle').should('contain','Paródias sobre cultura Geek e Tecnologia.')
         })
        it('Botão para login', () => {
            cy.get('.menu-button > .button').should('contain','Login')
        })
        it('Botão para cadastro', () => {
            cy.get('.container > .button').should('contain', 'EXPERIMENTE AGORA')
        })
    })
})    
      