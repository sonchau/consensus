describe('Online - Login', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('should access Quick Issue page', () => {
        cy.contains('Online Voting').click()
        cy.get('#email').type('sunshinecoast-test')
        cy.get('#password').type('sunshinecoast-test')
        cy.get('.MuiButton-label').click({ force: true })
        cy.url().should('include', '/online/dashboard')
    })
  })
