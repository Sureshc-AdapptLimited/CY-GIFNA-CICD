describe('template spec', () => {
    it('passes', () => {
        // cy.visit('https://gifna-stage.who.int/', { headers: { "Accept-Encoding": "gzip, deflate" } })
        cy.wait(6000);
        cy.contains('button', 'Log in').click({ force: true })
        cy.wait(5000);
        cy.contains('button', ' Log in with Azure').click({ force: true })
        cy.origin('https://login.microsoftonline.com', () => {
            // cy.get('div').should('have.text', 'Sign in')
            // cy.get('input[name*="loginfmt"]').type('Rick Sanchez').should('have.value', 'Rick Sanchez')
            cy.get('input#i0116.form-control.ltr_override.input.ext-input.text-box.ext-text-box').type('suresh.c@adappt.ai')
            cy.contains('input', 'Next').click({ force: true })
            cy.get('input[name*="passwd"]').type('Eshwara@123')
            cy.contains('input', 'Sign in').click({ force: true })
            cy.get('.text-title').contains('div', 'Stay signed in?')
            cy.get('input[data-report-event*="Signin_Submit"]').click({ force: true })
        })
        cy.wait(3000);
    })
  })
  