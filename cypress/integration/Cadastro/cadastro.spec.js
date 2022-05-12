/// <reference types="cypress" />

describe('Cadastro - Parodify', () => {
    before(() => {
        cy.visit('/users/sign_up')
   })
   describe('Verificando o carregamento dos componentes da página',() => {

      it('Logo - Parodify', () => {
        cy.get('.is-4-desktop > img').should('exist')
      })
      it('Imagem de Fundo', () => {
        cy.get('.container').should('exist')   
      })
      it('Botão Menu Login', () => {
        cy.get('.menu-button').should('exist')
        cy.get('.menu-button > .button').should('exist')
      })
      it('Card Box', () => {
        cy.get('.card-content').should('exist')
      })
      it('Card Box - Logo', () => {
        cy.get('.has-text-centered > img').should('exist')
      })
      it('Título', () => {
        cy.get('.title').should('exist')
      })
      it('Email', () => {
        cy.get('#user_email').should('exist')
      })
      it('Senha', () => {
        cy.get('#user_password').should('exist')
      })
      it('Confirmação de Senha', () => {
        cy.get('#user_password_confirmation').should('exist')
      })
      it('Botão Casdastrar', () => {
        cy.get('.actions > .button').should('exist')
      })
      it('Já Cadastrado', () => {
        cy.get('small').should('exist')
      })
      it('Fazer Login', () => {
        cy.get('small > a').should('exist')
      })
   })
   describe('Verificando o texto dos componentes da página', () => {

       it('Botão Login', () => {
        cy.get('.menu-button > .button').should('contain','Login')
       })
       it('Título', () => {
        cy.get('.title').should('contain','Pronto para se cadastrar?')
       })
       it('Botão Cadastrar', () => {
        cy.get('.actions > .button').should('contain','Cadastrar')
       })
       it('Já Cadastrado', () => {
        cy.get('small').should('contain','Já tem cadastro?')
       })
       it('Fazer Login', () => {
        cy.get('small > a').should('contain','Faça Login')
       })
   })
     
    describe('Validação do campo email', () => {
        afterEach(() => {
            cy.get('#user_email').clear()
    })
    it('Retornando erro caso o email seja invalido - sem nome do provedor', () => {
        cy.get('#user_email').type('username@fdsfsds')
    })
    it('Retornando erro caso o email seja invalido - sem nome do usuario', () => {
        cy.get('#user_email').type('@gmail.com')
    })
    it('Retornando erro caso o email seja invalido - incompleto', () => {
        cy.get('#user_email').type('username@gmail')
    })

  })
  describe('Validação do campo senha', () => {
    afterEach(() => {
        cy.get('#user_password').clear()
    })
    it('Retornando erro caso a senha seja invalida - apenas numeros', () => {
        cy.get('#user_password').type('125')
    })
    it('Retornando erro caso a senha seja invalida - apenas consoantes', () => {
        cy.get('#user_password').type('inha')
    })
    it('Retornando erro caso a senha seja invalida - apenas caracteres', () => {
        cy.get('#user_password').type('@#$%¨&')
    })
  })
  describe('Validação compo de confirmação de senha', () => {
    
        it('Retornando erro caso a senha seja invalida - apenas numeros', () => {
            cy.get('#user_password').type('125')
            cy.get('#user_password_confirmation').type('456')
        })
        it('Retornando erro caso a senha seja invalida - apenas consoantes', () => {
            cy.get('#user_password').type('inha')
            cy.get('#user_password_confirmation').type('daia')
        })
        it('Retornando erro caso a senha seja invalida - apenas caracteres', () => {
            cy.get('#user_password').type('@#$%¨&')
            cy.get('#user_password_confirmation').type('&*=+!!')
        })
        
    })
    describe('Preenchimento dos campos', () => {

        it('Email', () => {
            cy.get('#user_email').type('username@gmail.com')
        })
        it('Senha', () => {
            cy.get('#user_password').type('123456')
        })
        it('Confirmação de senha', () => {
            cy.get('#user_password_confirmation').type('123456')
           
        })
        
    })
    
  })


