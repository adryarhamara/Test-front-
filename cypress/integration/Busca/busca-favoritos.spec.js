/// <reference types="cypress" />

describe('Busca Inicio - Parodify', () => {
    before(() => {
         cy.login()
         cy.visit('/favorites')
    })

    describe('Verficando o carregamento dos componentes da página', () => { 

        it('Logo - Parodify', () => {
            cy.get('.is-4-desktop').should('exist')
            cy.get('img').should('exist')
        })
        it('Botão Saída', () => {
            cy.get('.menu-user').should('exist')
            cy.get('.dropdown-trigger > .icon > .fas').should('exist')
        })
        it('Imagem de Fundo', () => {
            cy.get('.section').should('exist')
        })
        it('Favoritos', () => {
            cy.get('.is-size-4').should('exist')
        })
        it('Botão - Albuns', () => {
            cy.get('.is-active > a').should('exist')
        })
        it('Botão - Musicas', () => {
            cy.get('ul > :nth-child(2) > a').should('exist')
        })
        it('Botão - Tocar Todas', () => {
            cy.get('#play-all').should('exist')
            cy.get('#play-all > :nth-child(2)').should('exist')
            cy.get('#play-all > .icon > .fas').should('exist')
        })
        it('Botão - Inicio', () => {
            cy.get('.is-fixed-bottom > :nth-child(1)').should('exist')
            cy.get(':nth-child(1) > .has-text-white > .fa').should('exist')
        })
        it('Botão - Busca', () => {
            cy.get('.is-fixed-bottom > :nth-child(2)').should('exist')
            cy.get(':nth-child(2) > .has-text-white > .fa').should('exist')
        })
        it('Botão - Favorito', () => {
            cy.get('.is-fixed-bottom > :nth-child(3)').should('exist')
            cy.get('.has-text-white > .fas').should('exist')
        })

    })
    describe('Verificando o texto dos componentes da página', () => {

        it('Favoritos', () => {
            cy.get('.is-size-4').should('contain','Favoritos')
        })
        it('Botão - Albuns', () => {
            cy.get('.is-active > a').should('contain','Álbums')
        })
        it('Botão - Musicas', () => {
            cy.get('ul > :nth-child(2) > a').should('contain','Músicas')
        })
        it('Botão - Tocar Todas', () => {
            cy.get('#play-all > :nth-child(2)').should('contain','Tocar Todas')
        })
    })
    describe('Validação e preenchimento do campo', () => {

        it('Botão - Albuns', () => {
            cy.get('.is-active > a').click()
        })
        it('Botão - Musicas', () => {
            cy.get('ul > :nth-child(2) > a').click()
        })
        it('Botão - Saída',() => {
            cy.get('.dropdown-trigger > .icon > .fas').click()
        })

    })
})