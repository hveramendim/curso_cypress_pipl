///<reference types="cypress" /> 

describe("Prueba de CI", ()=> {


    beforeEach( () => {
        cy.visit("https://demoqa.com/")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)
    
    })
    afterEach( () =>   {
        cy.wait(2000)
    })

    it("", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA' )
        cy.wait(1500)
    })

    })
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });