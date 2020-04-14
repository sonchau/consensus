describe('Private - Issue page', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('should access Quick Issue page', () => {
      cy.contains('Private Voting').click()
      cy.get('#email').type('sunshinecoast-test')
      cy.get('#password').type('sunshinecoast-test')
      cy.get('.MuiButton-label').click({ force: true })
      cy.url().should('include', '/private/dashboard')
    })
  })
