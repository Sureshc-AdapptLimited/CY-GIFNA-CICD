describe('template spec', () => {
    beforeEach(function() {
      cy.visit('/')
      // cy.viewport(1366, 768)
      cy.wait(6000);
    });
    // it('passes', () => {
    //   cy.get('.cardbox>div:first').as('feature');
    //   cy.wait(3000);
    //   cy.get('@feature').trigger('mouseover')
    //   // cy.get('@feature').then(($element) => {
    //   //   // Trigger a mouseover event using JavaScript
    //   //   const event = new MouseEvent('mouseover', {
    //   //     bubbles: true,
    //   //     cancelable: true,
    //   //   });
    //   //   $element[0].dispatchEvent(event);
        
    //   // });
    // })
    it('passes', () => {
        // cy.get('.login-link').should('be.visible')
        // cy.get('button').click()
        cy.contains('button', 'Log in').click({ force: true })
        cy.wait(5000);
        cy.contains('button', ' Log in with Azure').click({ force: true })
        //cy.contains('button', 'Email address, phone number or Skype').click({ force: true })
        // cy.origin('https://example.cypress.io', () => {
        //     cy.get('input').invoke('attr', 'placeholder').should('contain', 'Email address, phone number or Skype')
        //     cy.get('input').type('Rick Sanchez').should('have.value', 'Rick Sanchez')
        // })
        // cy.get('input').type('Hello, World'); 
        // cy.get('input[placeholder*="Name"]')
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

    // it('Open a new tab', () => {
    //   // Open a new tab using JavaScript
    //   cy.visit('https://docs.cypress.io/guides/overview/why-cypress'); // Open the first tab
    //   cy.window().then((win) => {
    //     // Open a new tab
    //     win.open('https://docs.cypress.io/plugins', '_blank');
    //   });

    //   // Switch to the newly opened tab
    //   cy.window().then((win) => {
    //     // Find the index of the new tab (typically the last one)
    //     const newTabIndex = win.length - 1;

    //     // Switch to the new tab
    //     win[newTabIndex].focus();
    //   });

    //   // Perform actions in the new tab
    //   cy.url().should('eq', 'https://docs.cypress.io/plugins'); // Verify that you're in the new tab

    //   // Switch back to the original tab
    //   cy.window().then((win) => {
    //     // Switch to the first tab
    //     win[0].focus();
    //   });

    //   // Perform actions in the original tab
    //   cy.url().should('eq', 'https://docs.cypress.io/guides/overview/why-cypress'); // Verify that you're back in the original tab
    // })
    
  })
  