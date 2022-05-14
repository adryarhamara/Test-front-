/// <reference types="cypress" />


describe('Álbum - Automação Urbana', () => {
    before(() => {
        cy.login()
        cy.visit('/albums/2')
   })
   describe('Verificando o carregamento dos componentes da página ', () => {
       
    it('Logo - Parodify', () => {
        cy.get('.is-4-desktop').should('exist')
        cy.get('.is-4-desktop > img').should('exist')
    })
    it('Botão - Saída', () => {
        cy.get('.menu-user').should('exist')
        cy.get('.dropdown-trigger > .icon').should('exist')
    })
    it('Imagem de Fundo', () => {
        cy.get('.section > :nth-child(1) > .column').should('exist')
    })
    it('Imagem - Álbum', () => {
        cy.get('.section > :nth-child(1) > .column > img').should('exist')
    })
    it('Nome - Álbum', () => {
        cy.get('.is-size-6').should('exist')
    })
    it('Músicas', () => {
        cy.get('.has-text-weight-bold').should('exist')
    })
    it('Botão - Tocar Todas', () => {
        cy.get('#play-all').should('exist')
    })
    it('Botão Play "Tocar Todas"', () => {
        cy.get('#play-all > .icon > .fas').should('exist')
    })
    it('Tocar Todas', () => {
        cy.get('#play-all > :nth-child(2)').should('exist')
    })
    it('Musica do Álbum', () => {
        cy.get('.is-full > .columns').should('exist')
    })
    it('Nome da Musica', () => {
        cy.get('.columns > :nth-child(2) > .is-size-5').should('exist')
    })
    it('Nome da Banda', () => {
        cy.get(':nth-child(2) > p').should('exist')
    })
    it('Botão Play', () => {
        cy.get('.play-button').should('exist')
    })
    it('Icone "Botão Play"', () => {
        cy.get('.play-button > .has-text-white > .fas').should('exist')
    })
    it('Botão Favoritar Música', () => {
        cy.get('.columns > .is-pulled-right').should('exist')
    })
    it('Icone "Botão Favoritar Música"', () => {
        cy.get('.far').should('exist')
    })
    it('Botão - Inicio', () => {
        cy.get('.is-fixed-bottom > :nth-child(1)').should('exist')
    })
    it('Icone "Botão - Inicio"', () => {
        cy.get(':nth-child(1) > .has-text-white > .fa').should('exist')
    })
    it('Botão - Procurar', () => {
        cy.get('.is-fixed-bottom > :nth-child(2)').should('exist')
    })
    it('Icone "Botão - Procurar"', () => {
        cy.get(':nth-child(2) > .has-text-white > .fa').should('exist')
    })
    it('Botão - Favoritos', () => {
        cy.get('.columns > .is-pulled-right').should('exist')
    })
    it('Icone "Botão - Favoritos"', () => {
        cy.get(':nth-child(3) > .has-text-white > .fas').should('exist')
    })

  })
  describe('Verificando o texto dos componentes da página ', () => {
      
    it('Nome do Álbum', () => {
        cy.get('.is-size-6').should('contain','As Quatro Versões')
    })
    it('Musicas', () => {
        cy.get('.has-text-weight-bold').should('contain','Músicas')
    })
    it('Botão - Tocar Todas', () => {
        cy.get('#play-all > :nth-child(2)').should('contain','Tocar Todas')
    })
    it('Nome da Musica', () => {
        cy.get('.columns > :nth-child(2) > .is-size-5').should('contain','TIndios')
    })
    it('Nome da Banda', () => {
        cy.get(':nth-child(2) > p').should('contain','Automação Urbana')
    })
  })
  describe('Tocar Musica', () => {
      
    it('Tocar Todas', () => {
        cy.get('#play-all').click()
    })
  })
})