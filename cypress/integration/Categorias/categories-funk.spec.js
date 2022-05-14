/// <reference types="cypress" />

describe('Categoria - Funk', () => {
    before(() => {
        cy.login()
        cy.visit('/categories/2')
   })
   describe('Verificando o carregamento dos componentes da página ', () => {
       
        it('Logo - Parodify', () => {
            cy.get('.is-4-desktop').should('exist')
            cy.get('.is-4-desktop > img').should('exist')
        })
        it('Botão Saída', () => {
            cy.get('.menu-user').should('exist')
            cy.get('.dropdown-trigger > .icon > .fas').should('exist')
        })
        it('Imagem de Fundo', () => {
            cy.get('#albums > .columns > .column').should('exist')
        })
        it('Título - Funk', () => {
            cy.get('.is-size-3').should('exist')
        })
        it('Título - Álbuns', () => {
            cy.get('ul').should('exist')
            cy.get('.is-active > a').should('exist')
        })
        it('Título - Musicas', () => {
            cy.get('ul > :nth-child(2) > a').should('exist')
        })
        it('Imagem - Álbum', () => {
            cy.get('#albums > .columns > .column > .has-text-white > img').should('exist')
        })
        it('Nome - Album', () => {
            cy.get('#albums > .columns > .column > .has-text-white > .is-size-6').should('exist')
        })
        it('Nome - MC', () => {
            cy.get('.is-size-7').should('exist')
        })
        it('Botão - Inicio', () => {
            cy.get('.is-fixed-bottom > :nth-child(1)').should('exist') 
        })
        it('Icone "Botão - Inicio" ', () => {
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
        
        it('Título - Funk', () => {
            cy.get('.is-size-3').should('contain','Funk')
        })
        it('Título - Albuns', () => {
            cy.get('.is-active > a').should('contain','Álbums')
        })
        it('Título - Musicas', () => {
            cy.get('ul > :nth-child(2) > a').should('contain','Músicas')
        })
        it('Nome - Album', () => {
            cy.get('#albums > .columns > .column > .has-text-white > .is-size-6').should('contain','Ostentabug')
        })
        it('Nome - MC', () => {
            cy.get('.is-size-7').should('contain','MC DBA')
        })
        
    })
    describe('Musicas - Rock', () => {
        after(() => {
            cy.get('ul > :nth-child(2) > a').click()
       })
     describe('Verificando o carregamento dos componentes da página', () => {
         
        it('Logo - Parodify', () => {
            cy.get('.is-4-desktop').should('exist')
            cy.get('.is-4-desktop > img').should('exist')
         })
        it('Botão Saída', () => {
            cy.get('.menu-user').should('exist')
            cy.get('.dropdown-trigger > .icon > .fas').should('exist')
        })
        it('Imagem de Fundo', () => {
            cy.get('.section').should('exist')
        })
        it('Título - Funk', () => {
            cy.get('.is-size-3').should('exist')
        })
        it('Título - Álbum', () => {
            cy.get('ul > :nth-child(1) > a').should('exist')
        })
        it('Título - Musicas', () => {
            cy.get('.is-active > a').should('exist')
        })
        it('Botão Tocar Todas', () => {
            cy.get('.is-12').should('exist')
            cy.get('#play-all').should('exist')
        })
        it('Botão Play "Tocar Todas"', () => {
            cy.get('#play-all > .icon > .fas').should('exist') 
        })
        it('Legenda "Botão Tocar Todas"', () => {
            cy.get('#play-all > :nth-child(2)').should('exist')
        })
        it('Musica', () => {
            cy.get('.is-full > .columns').should('exist')
        })
        it('Nome da Musica', () => {
            cy.get('.is-size-5').should('exist')
        })
        it('Nome do MC', () => {
            cy.get(':nth-child(2) > p').should('exist')
        })
        it('Botão Play', () => {
            cy.get('.play-button').should('exist')
        })
        it('Icone "Botão Play"', () => {
            cy.get('.play-button > .has-text-white > .fas').should('exist')
        })
        it('Botão Favorito', () => {
            cy.get('.columns > .is-pulled-right').should('exist')
        })
        it('Icone "Botão Favorito', () => {
            cy.get('.far').should('exist')
        })
       it('Botão Inicio', () => {
        cy.get('.is-fixed-bottom > :nth-child(1)').should('exist')
       })
       it('Icone "Botão Inicio"', () => {
        cy.get(':nth-child(1) > .has-text-white > .fa').should('exist')
       })
       it('Botão Procura', () => {
        cy.get('.is-fixed-bottom > :nth-child(2)').should('exist')
       })
       it('Icone "Botão Procura"', () => {
        cy.get(':nth-child(2) > .has-text-white > .fa').should('exist')
       })
       it('Botão Favoritos', () => {
        cy.get('.is-fixed-bottom > :nth-child(3)').should('exist')
       })
       it('Icone "Botão Favoritos"', () => {
        cy.get(':nth-child(3) > .has-text-white > .fas').should('exist')
       })
       describe('Verificando o texto dos componentes da página', () => {
       
        it('Título - Funk', () => {
            cy.get('.is-size-3').should('contain','Funk')
        })
        it('Título - Álbuns', () => {
            cy.get('ul > :nth-child(1) > a').should('contain','Álbums')
        })
        it('Botão - Tocar Todas', () => {
            cy.get('#play-all > :nth-child(2)').should('contain','Tocar Todas')
        })
        it('Nome da Musica', () => {
            cy.get('.is-size-5').should('contain','Baile de Tabela')
        })
        it('Nome do MC', () => {
            cy.get(':nth-child(2) > p').should('contain','MC DBA')
        })
      })
     }) 
   })
   describe('Tocar Todas as Músicas', () => {
    it('Tocar Todas', () => {
        cy.get('#play-all').click()
    })
  })
})