///<reference types="cypress" /> 

describe("INPUT TEST", ()=> {


    beforeEach( () => {
        cy.visit("https://www.qa-practice.com/elements/input/simple")
        cy.wait(1500)
    
    })
    afterEach( () =>   {
        cy.wait(2000)
    })

    it("COMPLETAR INPUT", () => {
        cy.get('#id_text_string').should('be.visible').type('NADA ES COINCIDENCIA')
        cy.log("WHAT DO YOU WANT?")
        cy.wait(1500)
    })

    })
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });