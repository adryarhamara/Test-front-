/// <reference types="cypress" />

describe('Álbum - Charlie Brown', () => {
    before(() => {
        cy.login()
        cy.visit('/albums/1')
   })
   describe('Verificando o carregamento dos componentes da página ', () => {
       
    it('Logo - Parodify', () => {
        cy.get('.is-4-desktop').should('exist')
        cy.get('.is-4-desktop > img').should('exist')
    })
    it('Botão - Saída', () => {
        cy.get('.menu-user').should('exist')
        cy.get('.dropdown-trigger > .icon > .fas').should('exist')
    })
    it('Imagem de Fundo', () => {
        cy.get('.section > :nth-child(1) > .column').should('exist')
    })
    it('Nome - Álbum', () => {
        cy.get('.is-size-6').should('exist')
    })
    it('Título - Músicas', () => {
        cy.get('.has-text-weight-bold').should('exist')
    })
    it('Botão - Tocar Todas', () => {
        cy.get('.is-12').should('exist')
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
    it('Botão Favoritos', () => {
        cy.get('.columns > .is-pulled-right').should('exist')
    })
    it('Icone "Botão Favorito"', () => {
        
    })
    it('Botão - Inicio', () => {
        cy.get('.is-fixed-bottom > :nth-child(1)').should('exist') 
    })
    it('Icone "Botão - Inicio"', () => {
        cy.get(':nth-child(1) > .has-text-white > .fa').should('exist')
    })
    it('Botão - Procura', () => {
        cy.get('.is-fixed-bottom > :nth-child(2)').should('exist')
    })
    it('Icone "Botão - Procura"', () => {
        cy.get(':nth-child(2) > .has-text-white > .fa').should('exist')
    })
    it('Botão - Favoritos', () => {
        cy.get('.is-fixed-bottom > :nth-child(3)').should('exist')
    })
    it('Icone "Botão - Favoritos"', () => {
        cy.get(':nth-child(3) > .has-text-white > .fas').should('exist')
    })

  })
  describe('Verificando o texto dos componentes da página ', () => {
      
    it('Nome do Álbum', () => {
        cy.get('.is-size-6').should('contain','Teste Longo Prazo Curto')
    })
    it('Musicas', () => {
        cy.get('.has-text-weight-bold').should('contain','Músicas')
    })
    it('Legenda "Botão - Tocar Todas"', () => {
        cy.get('#play-all > :nth-child(2)').should('contain','Tocar Todas')
    })
    it('Nome da Musica', () => {
        cy.get('.columns > :nth-child(2) > .is-size-5').should('contain','Sprints de Luta Sprints de Gloria')
    })
    it('Nome da Banda', () => {
        cy.get(':nth-child(2) > p').should('contain','Charlie Brown Bug')
    })
  })
  describe('Tocar Musica', () => {
      
    it('Tocar Todas', () => {
        cy.get('#play-all').click()
    })
  })
})