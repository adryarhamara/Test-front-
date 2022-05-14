/// <reference types="cypress" />

describe('Categoria - Rock', () => {
    before(() => {
        cy.login()
        cy.visit('/categories/1')
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
            cy.get('.section').should('exist')
        })
        it('Título - Rock', () => {
            cy.get('.is-size-3').should('exist')
        })
        it('Título - Albuns', () => {
            cy.get('ul').should('exist')
            cy.get('.is-active > a').should('exist')
        })
        it('Título - Musicas', () => {
            cy.get('ul > :nth-child(2) > a').should('exist')
        })
        it('Album - Charlie Brown Bug', () => {
            cy.get('#albums > .columns > :nth-child(1) > .has-text-white > img').should('exist')
        })
        it('Nome - Album', () => {
            cy.get('#albums > .columns > :nth-child(1) > .has-text-white > .is-size-6').should('exist')
        })
        it('Nome - Banda ', () => {
            cy.get(':nth-child(1) > .has-text-white > .is-size-7').should('exist')
        })

        it('Album - Automação Urbana', () => {
            cy.get('#albums > .columns > :nth-child(2) > .has-text-white > img').should('exist')
        })
        it('Nome - Album', () => {
            cy.get('#albums > .columns > :nth-child(2) > .has-text-white > .is-size-6').should('exist')
        })
        it('Nome - Banda', () => {
            cy.get(':nth-child(2) > .has-text-white > .is-size-7').should('exist')
        })
        it('Album - QA/DC', () => {
            cy.get('#albums > .columns > :nth-child(3) > .has-text-white > img').should('exist')
        })
        it('Nome - Album', () => {
            cy.get('#albums > .columns > :nth-child(3) > .has-text-white > .is-size-6').should('exist')
        })
        it('Nome - Banda', () => {
            cy.get(':nth-child(3) > .has-text-white > .is-size-7').should('exist')
        }) 
        it('Album - NullVana', () => {
            cy.get('#albums > .columns > :nth-child(4) > .has-text-white > img').should('exist')
        }) 
        it('Nome - Album', () => {
            cy.get('#albums > .columns > :nth-child(4) > .has-text-white > .is-size-6').should('exist')
        })  
        it('Nome - Banda', () => {
            cy.get(':nth-child(4) > .has-text-white > .is-size-7').should('exist') 
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
        
        it('Título - Rock', () => {
            cy.get('.is-size-3').should('contain','Rock')
        })
        it('Título - Albuns', () => {
            cy.get('.is-active > a').should('contain','Álbums')  
        })
        it('Título - Musicas', () => {
            cy.get('ul > :nth-child(2) > a').should('contain','Músicas')
        })
        it('Nome - Album "Charlie Brown"', () => {
            cy.get('#albums > .columns > :nth-child(1) > .has-text-white > .is-size-6').should('contain','Teste Longo Prazo Curto')
        })
        it('Nome - Banda', () => {
            cy.get(':nth-child(1) > .has-text-white > .is-size-7').should('contain','Charlie Brown Bug')
        })
        it('Nome - Album "Automação Urbana"', () => {
            cy.get('#albums > .columns > :nth-child(2) > .has-text-white > .is-size-6').should('contain','As Quatro Versões')
        })
        it('Nome - Banda', () => {
            cy.get(':nth-child(2) > .has-text-white > .is-size-7').should('contain','Automação Urbana')
        })
        it('Nome - Album "QA/DC"', () => {
            cy.get('#albums > .columns > :nth-child(3) > .has-text-white > .is-size-6').should('contain','Highway To Prod')
        })
        it('Nome - Banda', () => {
            cy.get(':nth-child(3) > .has-text-white > .is-size-7').should('contain','QA/DC')
        })
        it('Nome - Album "NullVana"', () => {
            cy.get('#albums > .columns > :nth-child(4) > .has-text-white > .is-size-6').should('contain','Nerver Testing')
        })
        it('Nome - Banda', () => {
            cy.get(':nth-child(4) > .has-text-white > .is-size-7').should('contain','NullVana')
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
        it('Título - Rock', () => {
            cy.get('.is-size-3').should('exist')
        })
        it('Título - Álbum', () => {
            cy.get('ul').should('exist')
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
            cy.get('#play-all > :nth-child(2)').should('exist')
        })
        it('I Musica', () => {
            cy.get('.is-multiline > :nth-child(2) > .columns').should('exist')
        })
        it('Nome da Musica', () => {
            cy.get(':nth-child(2) > .columns > :nth-child(2) > .is-size-5').should('exist')
        })
        it('Nome da Banda', () => {
            cy.get(':nth-child(2) > .columns > :nth-child(2) > p').should('exist')
        })
        it('Botão Play', () => {
            cy.get(':nth-child(2) > .columns > .play-button').should('exist')
        })
        it('Icone "Botão Play"', () => {
            cy.get(':nth-child(2) > .columns > .play-button > .has-text-white > .fas').should('exist')
        })
        it('Botão Favoritar Música', () => {
            cy.get(':nth-child(2) > .columns > .is-pulled-right').should('exist')
        })
        it('Icone "Botão Favoritar Música"', () => {
            cy.get(':nth-child(2) > .columns > .is-pulled-right > .has-text-white > .far').should('exist')
        })
        it('II Musica', () => {
            cy.get('.is-multiline > :nth-child(3) > .columns').should('exist')
        })
        it('Nome da Musica', () => {
            cy.get(':nth-child(3) > .columns > :nth-child(2) > .is-size-5').should('exist')
        })
        it('Nome da Banda', () => {
            cy.get(':nth-child(3) > .columns > :nth-child(2) > p').should('exist')
        })
        it('Botão Play', () => {
            cy.get(':nth-child(3) > .columns > .play-button').should('exist')
        })
        it('Icone "Botão Play"', () => {
            cy.get(':nth-child(3) > .columns > .play-button > .has-text-white > .fas').should('exist')
        })
        it('Botão Favoritar Música', () => {
            cy.get(':nth-child(3) > .columns > .is-pulled-right').should('exist')
        })
        it('Icone "Botão Favoritar Música"', () => {
            cy.get(':nth-child(3) > .columns > .is-pulled-right > .has-text-white > .far').should('exist')
        })
        it('III Musica', () => {
            cy.get(':nth-child(4) > .columns').should('exist') 
        })
        it('Nome da Musica', () => {
            cy.get(':nth-child(4) > .columns > :nth-child(2) > .is-size-5').should('exist')
        })
        it('Nome da Banda', () => {
            cy.get(':nth-child(4) > .columns > :nth-child(2) > p').should('exist')
        })
        it('Botão Play', () => {
            cy.get(':nth-child(4) > .columns > .play-button').should('exist')
        })
        it('Icone "Botão Play"', () => {
            cy.get(':nth-child(4) > .columns > .play-button > .has-text-white > .fas').should('exist')
        })
        it('Botão Favoritar Música', () => {
            cy.get(':nth-child(4) > .columns > .is-pulled-right').should('exist')
        })
        it('Icone "Botão Favoritar Música"', () => {
            cy.get(':nth-child(4) > .columns > .is-pulled-right > .has-text-white > .far').should('exist')
        })
        it('IV Musica', () => {
            cy.get(':nth-child(5) > .columns').should('exist')
        })
        it('Nome da Musica', () => {
            cy.get(':nth-child(5) > .columns > :nth-child(2) > .is-size-5').should('exist')
        })
        it('Nome da Banda', () => {
            cy.get(':nth-child(5) > .columns > :nth-child(2) > p').should('exist')
        })
        it('Botão Play', () => {
            cy.get(':nth-child(5) > .columns > .play-button').should('exist')
        })
        it('Icone "Botão Play"', () => {
            cy.get(':nth-child(5) > .columns > .play-button > .has-text-white > .fas').should('exist')
        })
        it('Botão Favoritar Música', () => {
            cy.get(':nth-child(5) > .columns > .is-pulled-right').should('exist')
        })
        it('Icone "Botão Favoritar Música"', () => {
            cy.get(':nth-child(5) > .columns > .is-pulled-right > .has-text-white > .far').should('exist')
        })
        it('V Musicas', () => {
            cy.get(':nth-child(6) > .columns').should('exist')
        })
        it('Nome da Musica', () => {
            cy.get(':nth-child(6) > .columns > :nth-child(2) > .is-size-5').should('exist')
        })
        it('Nome da Banda', () => {
            cy.get(':nth-child(6) > .columns > :nth-child(2) > p').should('exist')
        })
        it('Botão Play', () => {
            cy.get(':nth-child(6) > .columns > .play-button').should('exist')
        })
        it('Icone "Botão Play"', () => {
            cy.get(':nth-child(6) > .columns > .play-button > .has-text-white > .fas').should('exist')
        })
        it('Botão Favoritar Música', () => {
            cy.get(':nth-child(6) > .columns > .is-pulled-right').should('exist')
        })
        it('Icone "Botão Favoritar Música"', () => {
            cy.get(':nth-child(6) > .columns > .is-pulled-right > .has-text-white > .far').should('exist')
        })
        it('VI Musica', () => {
            cy.get(':nth-child(7) > .columns').should('exist')
       })
       it('Nome da Musica', () => {
        cy.get(':nth-child(7) > .columns > :nth-child(2) > .is-size-5').should('exist')
       })
       it('Nome da Banda', () => {
        cy.get(':nth-child(7) > .columns > :nth-child(2) > p').should('exist')  
       })
       it('Botão Play', () => {
        cy.get(':nth-child(7) > .columns > .play-button').should('exist')
       })
       it('Icone "Botão Play"', () => {
        cy.get(':nth-child(7) > .columns > .play-button > .has-text-white > .fas').should('exist')
       })
       it('Botão Favoritar Música', () => {
        cy.get(':nth-child(7) > .columns > .is-pulled-right').should('exist')
       })
       it('Icone "Botão Favoritar Música"', () => {
        cy.get(':nth-child(7) > .columns > .is-pulled-right > .has-text-white > .far').should('exist')
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
        cy.get('.is-fixed-bottom > :nth-child(3) > .has-text-white > .fas').should('exist')
       })
       describe('Verificando o texto dos componentes da página', () => {
       
        it('Título - Rock', () => {
           cy.get('.is-size-3').should('contain','Rock')
        })
        it('Título - Álbuns', () => {
            cy.get('ul > :nth-child(1) > a').should('contain','Álbums')
        })
        it('Botão - Tocar Todas', () => {
            cy.get('#play-all > :nth-child(2)').should('contain','Tocar Todas')
        })
        it('I Musica "Nome da Musica"', () => {
            cy.get(':nth-child(2) > .columns > :nth-child(2) > .is-size-5').should('contain','Sprints de Luta Sprints de Gloria')
        })
        it('I Musica "Nome da Banda"', () => {
            cy.get(':nth-child(2) > .columns > :nth-child(2) > p').should('contain','Charlie Brown Bug')
        })
        it('II Musica "Nome da Musica"', () => {
            cy.get(':nth-child(3) > .columns > :nth-child(2) > .is-size-5').should('contain','TIndios')
        })
        it('II Musica "Nome da Banda"', () => {
            cy.get(':nth-child(3) > .columns > :nth-child(2) > p').should('contain','Automação Urbana')
        })
        it('III Musica "Nome da Musica"', () => {
            cy.get(':nth-child(4) > .columns > :nth-child(2) > .is-size-5').should('contain','CSS Style')
        })
        it('III Musica "Nome da Banda"', () => {
            cy.get(':nth-child(4) > .columns > :nth-child(2) > p').should('contain','QA/DC')
        })
        it('IV Musica "Nome da Musica"', () => {
            cy.get(':nth-child(5) > .columns > :nth-child(2) > .is-size-5').should('contain','Some Class This')
        })
        it('IV Musica "Nome da Banda"', () => {
            cy.get(':nth-child(5) > .columns > :nth-child(2) > p').should('contain','QA/DC')
        })
        it('V Musica "Nome da Musica"', () => {
            cy.get(':nth-child(6) > .columns > :nth-child(2) > .is-size-5').should('contain','Um Tester no Pedaço (Inglês)')
        })
        it('V Musica "Nome da Banda"', () => {
            cy.get(':nth-child(6) > .columns > :nth-child(2) > p').should('contain','QA/DC')
        })
        it('VI Musica "Nome da Musica"', () => {
            cy.get(':nth-child(7) > .columns > :nth-child(2) > .is-size-5').should('contain','Windows My Ass')
        })
        it('VI Musica "Nome da Banda"', () => {
            cy.get(':nth-child(7) > .columns > :nth-child(2) > p').should('contain','NullVana')
        
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